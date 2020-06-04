
exports.up = function(knex) {
  return knex.schema.createTable('pagamentos', function(table){
      table.string('id').primary();
      
      table.string('nome').notNullable();
      table.string('alunos_id').notNullable();
      table.string('treinador_id').notNullable();
      
      table.foreign('treinador_id').references('id').inTable('treinador');
      table.foreign('alunos_id').references('id').inTable('alunos');
  })
};

exports.down = function(knex) {
return knex.schema.dropTable('pagamentos'); 
};
