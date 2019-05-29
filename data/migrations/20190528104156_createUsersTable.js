
exports.up = function(knex, Promise) {
  knex.schema.createTable('users', tbl => {
    tbl.increments()

    tbl
      .string('name', 128).notNullable()
     
    tbl
      .string('username', 128).notNullable()  
    
    tbl
      .string('password', 128).notNullable()  

    tbl
      .string('email', 128).notNullable()   

    tbl
      .string('avatar', 128)

    tbl.timestamps(true, true);

    // tbl
    //   .integer('balance', 128).notNullable()  

    // tbl
    //   .integer('spent', 128).notNullable()  

// avatar string that's a url
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('users');
};
