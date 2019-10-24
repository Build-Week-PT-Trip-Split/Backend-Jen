exports.up = function(knex, Promise) {
  return knex.schema.createTable("expenses", tbl => {
    tbl.increments();

    tbl.string("expense_name", 128).notNullable();

    tbl.integer("total_expense_price");

    // person creating expense
    tbl.string("primary_paid", 128);

    // bring in array of people who paid for the trip

    tbl
    .integer("trip_id")
    .unsigned()
    .references("id")
    .inTable("trips")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");

    tbl.boolean("settled").notNullable().defaultTo(0);

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("expenses");
};
