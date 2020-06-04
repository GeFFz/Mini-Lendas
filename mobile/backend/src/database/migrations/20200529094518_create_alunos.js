
exports.up = function(knex) {
    return knex.schema.createTable('alunos', function(table){
        table.increments();
        
        table.string('nome').notNullable();
        table.string('rg').notNullable();
        table.string('idade').notNullable();
        table.string('posicao').notNullable();
        table.string('whatsapp').notNullable();
        table.string('endereco').notNullable();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
        
        table.decimal('mensalidade').notNullable();
        
        table.string('treinador_id').notNullable();
        
        table.foreign('treinador_id').references('id').inTable('treinador');

    })
  };

exports.down = function(knex) {
  return knex.schema.dropTable('alunos'); 
};