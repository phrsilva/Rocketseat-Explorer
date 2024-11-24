const AppError = require('../utils/AppError');
const knex = require('../database/knex');
const { query } = require('express');


class MovieControllers {
    async create(req, res) {
        const {name, description, score, user_id} = req.body;

        // checar se o usuário já existe

        const checkUserExists = await knex('users').where({id: user_id}).first();
        if (!checkUserExists) {
            throw new AppError('Usuário não cadastrado! Realize seu cadastro para deixar sua avaliação!', 400);
        }

        // checar se o filme já foi avaliado

        const checkMovieExists = await knex('movie_scores').where({name}).first();
        if (checkMovieExists) {
            throw new AppError('O filme já foi avaliado!', 400);
        }

        const movie = await knex('movie_scores').insert({name, description, score, user_id})

        return res.status(201).json(`O filme '${name}' foi avaliado com sucesso!`);
    }



    async index(req, res) {
        const movies = await knex('movie_scores').select('*');

        return res.json(movies.map(movie => {
            return {
                id: movie.id,
                name: movie.name,
                description: movie.description,
                score: movie.score,
                user_id: movie.user_id,
                created_at: movie.created_at
            }
        }));
    }

    async show(req, res) {
        // Exibir filmes com base no nome, admitindo semelhanças

        const {name} = req.query;

        // verifica se o nome do filme não foi informado

        if (!name) {
            throw new AppError('Informe o nome do filme', 400);
        }

        let movie_scores

        movie_scores = await knex('movie_scores').select('*').where('movie_scores.name', 'like', `%${name}%`)

        return res.json(movie_scores.map(movie => {
            return {
                id: movie.id,
                name: movie.name,
                description: movie.description,
            }
        }));
    }

    async update(req, res) {}

    async delete(req, res) {}
}

module.exports = new MovieControllers();