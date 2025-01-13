const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const { compare } = require('bcryptjs');
const configAutenticacao = require('../configs/auth');
const { sign } = require('jsonwebtoken');

class SessionsController {

    async create(req, res) {

        const {email, password} = req.body

        const user = await knex('users').where({email}).first();

        if(!user) {
            throw new AppError('Email e/ou senha incorretos', 401);
        }

        const verificarSenha = await compare(password, user.password);

        if(!verificarSenha) {
            throw new AppError('Email e/ou senha incorretos', 401);
        }

        const { secret, expiresIn } = configAutenticacao.jwt;

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });


        return res.json({user, token});


    }

}

module.exports = SessionsController
