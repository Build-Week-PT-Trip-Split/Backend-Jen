const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update
};

function find() {
  return db("expenses").select(
    "id",
    "expense_name",
    "total_expense_price",
    "primary_paid",
    "trip_id",
    "created_at",
    "updated_at",
    "settled"
  );
}

function findBy(filter) {
  return db("expenses").where(filter);
}

async function add(trip) {
  const [id] = await db("expenses").insert(trip).returning('id');

  return findById(id);
}

function findById(id) {
  return db("expenses")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("expenses")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.findById(id) : null));
}