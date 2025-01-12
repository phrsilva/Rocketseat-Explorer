const {hash, compare} = require('bcryptjs');
const knex = require('../database/knex');
const AppError = require('../utils/AppError');


class UserControllers {
    // criar usuário
    async create(req, res) {
        const {name, email, password} = req.body;

        const checkUserExists = await knex('users').where({email}).first();

        // verifica se o usuário já existe

        if (checkUserExists) {
            throw new AppError('E-mail já cadastrado', 400);
        }

        // verificar se a senha tem mais de 8 digitos, maíusculas e minúsculas e caracteres especiais

        function validarSenha(password) {
            // expressão regular
            
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
            return passwordRegex.test(password);
            
        }

        if (!validarSenha(password)) {
            console.log(password)
            throw new AppError('A senha deve contar 8 digitos, maiúsculas, minúsculas e caracteres especiais', 400);
        }

        // verificar se o email é válido

        function validarEmail(email) {
            // expressão regular
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}/
            return emailRegex.test(email);
            
        }

        if (!validarEmail(email)) {
            throw new AppError('Email inválido', 400);
        }

        // criptografar a senha

        const hashedPassword = await hash(password, 8);

        // salvar o novo usuário

        await knex('users').insert({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({"201": "Usuário criado com sucesso!!"});

        
    }

    // listar usuários
    async index(req, res) {
        const users = await knex('users').select('*');

        return res.json(users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                created_at: user.created_at
            }
        }));
    }

    // mostrar usuário
    async show(req, res) {
        const {id} = req.params;

        const user = await knex('users').where({id}).first();

        if (!user) {
            throw new AppError('Usuário não encontrado', 404);
        }

        return res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: user.created_at
        });
    }

    // atualizar usuário
    async update(req, res) {
        const {name, email, password} = req.body;
        const user_id = req.user.id;

        const user = await knex('users').where({id: user_id}).first();

        if (!user) {
            throw new AppError('Usuário não encontrado', 404);
        }

        const checkUserExists = await knex('users').where({email}).first();

        if (checkUserExists && checkUserExists.id !== user.id) {
            throw new AppError('E-mail já cadastrado', 400);
        }

        function validarEmail(email) { 
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}/
            return emailRegex.test(email);
        }

        if (email && !validarEmail(email)) {
            throw new AppError('Email inválido', 400);
        }

        function validarSenha(password) {
            // expressão regular
            
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
            return passwordRegex.test(password);
            
        }

        user.name = name || user.name;
        user.email = email || user.email;

        if (password && !validarSenha(password)) {
            throw new AppError('A senha deve contar 8 digitos, maiúsculas, minúsculas e caracteres especiais', 400);
        }

        if (password) {
            user.password = await hash(password, 8);
        }

        await knex('users').update(user).where({id: user_id});



        return res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            updated_at: user.updated_at
        });



    }

    // deletar usuário
    async delete(req, res) {
        const user_id = req.user.id;

        const user = await knex('users').where({id: user_id}).first();

        if (!user) {
            throw new AppError('Usuário não encontrado', 404);
        }

        await knex('users').delete().where({id: user_id});

        return res.status(200).json({'message':'Usuário deletado com sucesso!!'});
    }

    // mudar o avatar

    

}



module.exports = new UserControllers(); 