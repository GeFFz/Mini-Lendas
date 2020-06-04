const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {

    async index(request, response) {
        const treinador = await connection('treinador').select('*');
    
        return response.json(treinador);
    },


    async create(request, response){
        const {nome, email, whatsapp, cidade, uf} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('treinador').insert({
        id,
        nome,
        email,
        whatsapp,
        cidade,
        uf,
    })
    
    return response.json({ id });
    }
};