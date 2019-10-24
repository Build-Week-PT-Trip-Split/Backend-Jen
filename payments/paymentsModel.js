const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update
};

function find() {
  return db("payments").select(
    "id",
    "expense_id",
    "user_id",
    "amount_paid"
  );
}

function findBy(filter) {
  return db("payments").where(filter);
}

async function add(expense) {
  const [id] = await db("payments").insert(expense).returning('id');

  return findById(id);
}

function findById(id) {
  return db("payments")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("payments")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.findById(id) : null));
}