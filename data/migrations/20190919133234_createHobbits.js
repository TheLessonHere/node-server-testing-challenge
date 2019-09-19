
exports.up = function(knex) {
    return knex.schema
              .createTable('hobbits', tbl=>{
                  tbl.increments()
                  tbl.string('name')
                      .unique()
                      .notNullable()
              })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('hobbits')
  };
