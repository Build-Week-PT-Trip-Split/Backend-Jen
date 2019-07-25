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
  return db("users").select("id", "name", "username", "password", "email");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
  // .then(count => (count > 0 ? this.get(id) : null));
}
