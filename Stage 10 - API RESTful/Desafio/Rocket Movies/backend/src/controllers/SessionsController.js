const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const { compare } = require('bcryptjs');
const configAutenticacao = require('../configs/auth');
const { sign } = require('jsonwebtoken');

class SessionsController {

    async create(req, res) {

        const {email, password} = req.body

        const usuario = await knex('users').where({email}).first();

        if(!usuario) {
            throw new AppError('Email e/ou senha incorretos', 401);
        }

        const verificarSenha = await compare(password, usuario.password);

        if(!verificarSenha) {
            throw new AppError('Email e/ou senha incorretos', 401);
        }

        const { secret, expiresIn } = configAutenticacao.jwt;

        const ficha = sign({}, secret, {
            subject: String(usuario.id),
            expiresIn
        });


        return res.json({usuario, ficha});


    }

}

module.exports = SessionsController
