const connection = require('../database/connection');


module.exports = {
    async create (request, response){

        const {id} = request.body;

        const perfil = await connection('treinador')
        .where('id', id)
        .select('nome')
        .first();

        if (!perfil){
            return response.status(400).json({ error: 'ID Inválido.'});

        }
        return response.json(perfil);
    }
}