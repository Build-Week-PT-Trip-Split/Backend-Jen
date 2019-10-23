exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          name: "Mario",
          username: "mario1",
          password: "pass",
          email: "test@gmail.com",
          id: 0,
          friends: [1, 2, 3]
        },
        {
          name: "Luigi",
          username: "luigi1",
          password: "pass",
          email: "test@gmail.com",
          id: 1,
          friends: []
        },
        {
          name: "Bowser",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com",
          id: 2,
          friends: []
        },
        {
          name: "Peach",
          username: "princess",
          password: "pass",
          email: "test@gmail.com",
          id: 3,
          friends: []
        },
        {
          name: "Joe",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 4,
          friends: []
        },
        {
          name: "Matt",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 5,
          friends: []
        },
        {
          name: "David",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 6,
          friends: []
        },
        {
          name: "Jon",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 7,
          friends: []
        },
        {
          name: "Ryan",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 8,
          friends: []
        },
        {
          name: "Jen",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 9,
          friends: []
        },
        {
          name: "Jack",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 10,
          friends: []
        },
        {
          name: "Jill",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 11,
          friends: []
        },
        {
          name: "Mike",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 12,
          friends: []
        },
        {
          name: "Katie",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 13,
          friends: []
        },
        {
          name: "Bill",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com",
          id: 14,
          friends: []
        }


      ]);
    });
};
