exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl.string("name", 128).notNullable();

    tbl.string("username", 128).notNullable().unique();

    tbl.string("password", 128).notNullable();

    tbl.string("email", 128).notNullable().unique();

    tbl.string("friends").notNullable().defaultTo("[]");

    tbl.string("img", 128);

    tbl.timestamps(true, true);

    // tbl
    //   .integer('balance', 128).notNullable()

    // tbl
    //   .integer('spent', 128).notNullable()

    // avatar string that's a url
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
