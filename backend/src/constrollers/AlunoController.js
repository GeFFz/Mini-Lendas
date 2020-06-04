const connection = require('../database/connection');

module.exports = {

    async delete(request, response) {
        const { id } = request.params;
        const treinador_id = request.headers.authorization;

        const aluno = await connection('alunos')
        .where('id', id)
        .select('treinador_id')
        .first();

        if (aluno.treinador_id != treinador_id){
            return response.status(401).json({error: "Operation not permitted"});
        }
        await connection ('alunos').where('id', id).delete();

        return response.status(204).send();
    },

    async index(request, response) {

        const {page = 1} = request.query;

        const [count] = await connection('alunos').count();  

        console.log(count);

        const alunos = await connection('alunos')
        .join ('treinador', 'treinador.id', '=', 'alunos.treinador_id')
        .limit(5)
        .offset((page -1)*5)
        .select(['alunos.*', 'treinador.email', 'treinador.whatsapp', 'treinador.cidade', 'treinador.uf']);

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(alunos);
    },


    async create(request, response) {
        const {nome, rg, idade, endereco, cidade, uf, whatsapp, mensalidade} = request.body;
        const treinador_id = request.headers.authorization; // Colocar uma ID valida para testar.

        const [id] = await connection('alunos').insert({
            nome,
            rg,
            idade,
            endereco,
            cidade,
            uf,
            whatsapp,
            mensalidade,
            treinador_id,

        })

        return response.json({ id });
    }

};