const connection = require('../database/connection');

module.exports = {

    async index (request, response){
        const treinador_id = request.headers.authorization;

        const alunos = await connection('alunos')
        .where ('treinador_id', treinador_id)
        .select('*');

        return response.json(alunos);


    }

};