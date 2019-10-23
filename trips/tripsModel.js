const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("trips").select(
    "id",
    "name",
    "date",
    "base_cost",
    "complete",
    "user_id",
    "img",
    "created_at",
    "updated_at"
  );
}

function findBy(filter) {
  return db("trips").where(filter);
}

async function add(trip) {
  const [id] = await db("trips").insert(trip);

  return findById(id);
}

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

function remove(id) {
  return db("trips")
    .where("id", id)
    .del();
}

function update(id, changes) {
  return db("trips")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.findById(id) : null));
}
