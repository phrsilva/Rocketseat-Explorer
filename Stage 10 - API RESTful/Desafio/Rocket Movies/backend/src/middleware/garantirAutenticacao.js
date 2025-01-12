const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

function garantirAutenticacao(request, response, next) {
    const cabecalhoAutenticacao = request.headers.authorization;

    if (!cabecalhoAutenticacao) {
        throw new AppError('Token JWT não informado', 401);
    }

    const [, token] = cabecalhoAutenticacao.split(' ');

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);
        request.user = {
            id: Number(user_id),
        }
        return next();
    } catch {
        throw new AppError('Token JWT inválido', 401);
    }
    
}

module.exports = garantirAutenticacao;