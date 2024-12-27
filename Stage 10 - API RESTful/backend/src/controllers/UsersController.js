const database = require('../database/sqlite/index');
const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');

class UsersController{
    async create(request, response){
        const { name, email, password } = request.body;
        const db = await database();
        const checkIfUserExists = await db.get('SELECT * FROM users WHERE email = (?)', [email]);

        if(checkIfUserExists){
            throw new AppError('E-mail já cadastrado', 400);
        }

        const passwordHash = await hash(password, 8);


        await db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, passwordHash]);

        return response.json({ name, email, passwordHash });
 
    }

    async update(request, response){
        const { name, email, password, currentPassword } = request.body;
        const id = request.user.id;
        const db = await database();
        const user = await db.get('SELECT * FROM users WHERE id = (?)', [id]);
        const passwordHash = await hash(password, 8);

        if(!user){
            throw new AppError('Usuário nao encontrado', 400);
        }
        
        const userWithUpdatedEmail = await db.get('SELECT * FROM users WHERE email = (?)', [email]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError('E-mail ja cadastrado', 400);
        }

        if(password && !currentPassword){
            throw new AppError('Senha atual nao informada', 400);
        }

        if(password && currentPassword){
            const checkPassword = await compare(currentPassword, user.password);

            if(!checkPassword){
                throw new AppError('Senha atual nao confere', 400);
            }
        }
               
        user.name = name ?? user.name
        user.email = email ?? user.email
        user.password = password ?? user.password

        await db.run('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, passwordHash, id]);

        return response.json({ name, email, passwordHash });
    }
}


module.exports = UsersController;
