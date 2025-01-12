const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/diskStorage');

class UserAvatarController {
    async updateAvatar(req, res) {
        const user_id = req.user.id;
        const avatarFilename = req.file.filename
        const diskStorage = new DiskStorage();

        const user = await knex('users').where({id: user_id}).first();

        if (!user) {
            throw new AppError('Usuário não encontrado', 404);
        }

        if (user.avatar) {
            await diskStorage.deleteFile(user.avatar);
        }

        const filename = await diskStorage.saveFile(avatarFilename);

        await knex('users').update({avatar: filename}).where({id: user_id});


        return res.status(200).json('Avatar atualizado com sucesso!!');
    }
}

module.exports = UserAvatarController;