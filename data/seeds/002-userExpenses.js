
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userExpenses').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('userExpenses').insert([
        {
          users_id: 0,
          expenses_id: 0
        },
        {
          users_id: 1,
          expenses_id: 4
        },
        {
          users_id: 1,
          expenses_id: 1
        },
        {
          users_id: 0,
          expenses_id: 2
        },
        {
          users_id: 2,
          expenses_id: 3
        },
        {
          users_id: 2,
          expenses_id: 5
        },
        
      ]);
    });
};
