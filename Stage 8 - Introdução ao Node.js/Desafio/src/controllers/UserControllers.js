const {hash, compare} = require('bcryptjs');
const knex = require('../database/knex');
const AppError = require('../utils/AppError');


class UserControllers {

    async create(req, res) {
        const {name, email, password} = req.body;

        const checkUserExists = await knex('users').where({email}).first();

        if (checkUserExists) {
            throw new AppError('E-mail já cadastrado', 400);
        }

        const hashedPassword = await hash(password, 8);

        await knex('users').insert({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({"201": "Usuário criado com sucesso!!"});

        
    }

}

module.exports = new UserControllers(); 