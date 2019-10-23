exports.seed = function(knex, Promise) {
  return knex("trips")
    .truncate()
    .then(function() {
      return knex("trips").insert([
        { 
          name: "Italy", 
          date: "01/01/2020", 
          base_cost: 200000,
          complete: false,
          img: 'https://trojantravel.usc.edu/wp-content/uploads/2016/07/SHS_264989543_Venice.jpg',
          user_id: 0 
        },
        { 
          name: "Spain", 
          date: "03/01/2019", 
          base_cost: 400000,
          complete: true,
          img: 'https://www.driftwoodjournals.com/wp-content/uploads/2014/03/Circulo-de-Bellas-Artes-roof-top-terrace-terraza.jpg', 
          user_id: 1
        },
        { 
          name: "France", 
          date: "06/01/2020", 
          base_cost: 500000,
          complete: false,
          img: 'https://www.france-bike.com/fileadmin/_processed_/4/8/csm_81cc5c49e8beeb9f530a678979b447c7d56d6da9_6dfaf27ded.jpg', 
          user_id: 2
        }
      ]);
    });
};
