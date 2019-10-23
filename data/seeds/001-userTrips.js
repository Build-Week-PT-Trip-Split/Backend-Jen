
exports.seed = function(knex, Promise) {

  return knex('userTrips').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('userTrips').insert([
        {
          users_id: 0,
          trips_id: 0
        },
        {
          users_id: 3,
          trips_id: 0
        },
        {
          users_id: 4,
          trips_id: 0
        },
        {
          users_id: 1,
          trips_id: 0
        },
        {
          users_id: 5,
          trips_id: 0
        },
        {
          users_id: 6,
          trips_id: 1
        },
        {
          users_id: 1,
          trips_id: 1
        },
        {
          users_id: 7,
          trips_id: 1
        },
        {
          users_id: 8,
          trips_id: 1
        },
        {
          users_id: 0,
          trips_id: 1
        },
        {
          users_id: 9,
          trips_id: 2
        },
        {
          users_id: 10,
          trips_id: 2
        },
        {
          users_id: 2,
          trips_id: 2
        },
        {
          users_id: 11,
          trips_id: 2
        },
        {
          users_id: 12,
          trips_id: 2
        },
        {
          users_id: 2,
          trips_id: 0
        },
        {
          users_id: 13,
          trips_id: 1
        },
        {
          users_id: 14,
          trips_id: 1
        },

      ]);
    });
};
