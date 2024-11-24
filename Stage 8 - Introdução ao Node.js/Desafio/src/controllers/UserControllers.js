const knex = require('../database/knex');

class UserControllers {

    async create(req, res) {
        console.log('Corpo da requisição =======> ',req);

        const {name, email, password} = req.body;

        await knex('users').insert({
            name,
            email,
            password
        });

        return res.status(201).json();
        
    }

}

module.exports = new UserControllers(); 