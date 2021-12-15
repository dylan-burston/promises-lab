require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');

// 1) Find all movie docs

  Promise.resolve().then(function() {
    console.log('HERE')
    return Movie.find({});  
  }).then(function(result) {
    console.log('1): ', result)

// 2) Find all performer docs

  }).then(function() {
    return Performer.find({});
  }).then(function(result) {
    console.log('2): ', result)
  }).then(function() {
    return Movie.find({mpaaRating: 'PG'})

// 3) Find all movies with an MPAA Rating of 'PG'

  }).then(function(result) {
    console.log('3): ', result)

// 4) Find all movies that are still showing

  }).then(function() {
    return Movie.find({nowShowing: true});
  }).then(function(result) {
    console.log('4): ', result)

// 5) Find all movies with an MPAA Rating of 'PG' or 'PG-13'

  }).then(function() {
    return Movie.find({})
  }).then(function(result) {
    const condition = "PG" || "PG-13";  
    result = result.filter(movie => movie.mpaaRating === 'PG' || movie.mpaaRating === 'PG-13')
    console.log('5): ', result)

 // 6) Find the first movie found with a releaseYear of 2018

    }).then(function(){
        return Movie.findOne({releaseYear: 2018})
    }).then(function(result) {
        console.log('6): ', result)

// 7) Find all movies released after 1980

    }).then(function() {
        return Movie.find({})
    }).then(function(result) {
        result = result.filter(movie => movie.releaseYear > 1980);
        console.log('7): ', result)

// 8) Find all movies whose titles start with a 'C'
// Hint: StackOverflow will show how to use a regular expression

    }).then(function() {
        return Movie.find({})
    }).then(function(result) {
        result = result.filter(movie => movie.title[0] === "C");
        console.log('8): ', result)

// 9) Find the performer named 'Rami Malek'

    }).then(function() {
        return Performer.find({name: 'Rami Malek'})
    }).then(function(result) {
        console.log('9): ', result)

// 10) Find all performers born before 1980

    }).then(function() {
        return Performer.find({})
    }).then(function(result) {
        result = result.filter(performer => performer.born < 1980)
        console.log('10): ', result)

// 11) Find all performers whose name starts with a 'J'

    }).then(function() {
        return Performer.find({})
    }).then(function(result) {
        result = result.filter(performer => performer.name[0] === 'J')
        console.log('11): ', result)

// 12) Add a reference to performer 'Bill Murray' to
//     the movie Caddyshack's cast property and save.
//     console.log the updated movie.

    return Promise.all([
      Movie.findOne({title:'Caddyshack'}), //grabs Caddyshack
      Performer.findOne({name:'Bill Murray'}) //grabs bill murray
    ]);
    }).then(function(result){
      result[0].cast.push(result[1]); //pushes bill murray into cast on caddyshaek 
      return result[0].save();
    }).then(function(result){
      console.log('12):', result);

    }).then(function() {
    process.exit();
   });
  
  // I realize my method is not in lne with the mongoose work we have just done, I will redo it ASAP and resubmit. Thanks for undertanding, Dor! 

