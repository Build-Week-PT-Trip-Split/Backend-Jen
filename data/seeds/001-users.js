exports.seed = function(knex, Promise) {
  return knex("users")
    // .truncate()
    .then(function() {
      return knex("users").insert([
        {
          name: "Mario",
          username: "mario1",
          password: "pass",
          email: "test@gmail.com",
        },
        {
          name: "Luigi",
          username: "luigi1",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Bowser",
          username: "badguy",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Peach",
          username: "princess",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Joe",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Matt",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "David",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Jon",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Ryan",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Jen",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Jack",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Jill",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Mike",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Katie",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        },
        {
          name: "Bill",
          username: "traveler",
          password: "pass",
          email: "test@gmail.com"
        }


      ]);
    });
};
