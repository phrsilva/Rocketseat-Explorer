const AppError = require('../utils/AppError');
const knex = require('../database/knex');
const { query } = require('express');

class TagController {

    async index(req, res) {
        const tags = await knex('movie_tags').select('*');

        if (!tags) {
            throw new AppError('Nenhuma tag cadastrada', 404);
        }

        return res.json(tags.map(tag => {
            return {
                id: tag.id,
                user_id: tag.user_id,
                movie_id: tag.movie_id,
                tags: tag.tags

            }
        }));

    }
    async create(req, res) {
        const {user_id, movie_id, tags} = req.body;

        const checkMovieExists = await knex('movie_scores').where({id: movie_id}).first();
        if (!checkMovieExists) {
            throw new AppError('Filme nao encontrado', 404);
        }

        const checkUserExists = await knex('users').where({id: user_id}).first();
        if (!checkUserExists) {
            throw new AppError('Usuário nao encontrado', 404);
        }

        const checkTagsExists = await knex('movie_tags').where({tags}).first();
        if (checkTagsExists) {
            throw new AppError('Tag ja cadastrada', 400);
        }

        const movie_tags = await knex('movie_tags').insert({user_id, movie_id, tags});

        return res.status(201).json('Tag cadastrada com sucesso!');
    }
    async update(req, res) {

        const {id} = req.params;
        const {user_id, movie_id, tags} = req.body;

        const checkMovieExists = await knex('movie_scores').where({id: movie_id}).first();

        if(!checkMovieExists) {
            throw new AppError('Filme nao encontrado', 404);
        }

        const checkUserExists = await knex('users').where({id: user_id}).first();

        if(!checkUserExists) {
            throw new AppError('Usuário nao encontrado', 404);
        }

       

        const movie_tags = await knex('movie_tags').update({user_id, movie_id, tags}).where({id});

        return res.status(200).json('movie_tags atualizado com sucesso!');


    }
    async delete(req, res) {

        const {id} = req.params;

        const movie_tags = await knex('movie_tags').where({id}).first();

        if(!movie_tags) {
            throw new AppError('Tag nao encontrada', 404);
        }

        await knex('movie_tags').delete().where({id});

        return res.status(200).json(`A tag '${movie_tags.tags}' foi deletada com sucesso!`);
    }
}
module.exports = new TagController()