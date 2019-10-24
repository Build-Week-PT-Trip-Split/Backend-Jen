exports.up = function(knex) {
    return knex.schema.createTable("payments", tbl => {
        tbl.increments();

        tbl
            .integer("user_id")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        tbl
            .integer("expense_id")
            .unsigned()
            .references("id")
            .inTable("expenses")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        tbl.integer("amount_paid");

        tbl.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("payments");
};

