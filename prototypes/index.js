const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    const orangeKitties = kitties.filter(kitty => kitty.color === "orange").map(kitty => kitty.name);
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = orangeKitties;
    return result;

    // Annotation:
    // In the orangeKittyNames function, create a variable orangeKitties to hold what is returned by invoking filter on the kitties array, grabbing all objects in which the property "color" is assigned to "orange." Then chain map onto that method to return only the names of the kitties.
  },

  sortByAge() {
    const kittiesByAge = kitties.sort((a, b) => (b.age - a.age));
    // Sort the kitties by their age

    const result = kittiesByAge;
    return result;

    // Annotation:
    // Create a variable to contain the kitties sorted by age. Run the sort method on the kitties array, with the syntax (a, b) in which a and b represent 2 elements in the array at a time to compare them. Then to sort by age in descending order, use b.age - a.age
  },

  growUp() {
    const kittiesByAge = kitties.sort((a, b) => (b.age - a.age));
    const olderKitties = kittiesByAge.map(kitty => {
      //solution #1
      // (kitty.age += 2);
      // return kitty

      //solution #2
      // let {name, age, color} = kitty
      // age += 2
      // return {name, age, color}

      //solution #3
      const {age} = kitty
      const newAge = age + 2
      return {...kitty, age: newAge}
    })

    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = olderKitties;
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    //need an array of the same length (map)
    //need to create objects with 2 key value pairs

    const studentRatioByMod = mods.map(mod => {
      const eachMod = mod.mod
      const ratio = mod.students / mod.instructors
      return { mod: eachMod, studentsPerInstructor: ratio}
    })

    const result = studentRatioByMod;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    const cakeFlavorStock = cakes.map(cake => {
      const cakeFlavor = cake.cakeFlavor;
      const cakeStock = cake.inStock;
      return { flavor: cakeFlavor, inStock: cakeStock }
    })


    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakeFlavorStock;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    //filter only the cake objects that are in stock
    const stocked = cakes.filter(cake => cake.inStock > 0)

    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = stocked;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    // add together all quantities for inStock
    // for each cake, get the inStock amount and add it to a running total

    const totalAmount = cakes.reduce((total, currentCake) => {
      return total + currentCake.inStock
    }, 0)

    const result = totalAmount;
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //to return the total amount of cakes in stock, i ran reduce on the cakes array and returned the running total plus the number of cakes in stock for each cake in the array. after iterating through all of the cakes, the total is what is returned and stored in the variable, totalAmount
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    //cakes is an array of cake objects each with a key called "toppings", which are arrays of toppings.
    //i need to check each cake's toppings array and for each topping, add the topping to a new array as long as it doesn't alerady exist there

    //might do forEach cake, check forEach topping and add the topping to the array if the array doesn't include interval

    //might also just combine all toppings arrays, and try [...new Set(arrayName)] and see if that works too

    //Solution #1
    // const allToppings = [];
    // cakes.forEach(cake => {
    //   cake.toppings.forEach(topping => {
    //     if (!allToppings.includes(topping)) {
    //       allToppings.push(topping)
    //     }
    //   })
    // })


    //Solution #2
    const allToppingsLists = cakes.map(cake => cake.toppings);
    const allToppingsSingleList = allToppingsLists.flat();
    const allToppings = [... new Set (allToppingsSingleList)]

    const result = allToppings;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.

    //previous function returned an array of each topping. each of these needs to be a key, so i could map over them and set them as keys
    //for each of these toppings, i need to iterate over each topping of each cake and take a tally of how many times that topping appears.

    const toppings = this.allToppings();
    const toppingAmounts = toppings.reduce((acc, toppingName) => {
      let tally = 0;
      cakes.forEach(cake => {
        cake.toppings.forEach(topping => {
          if (topping === toppingName) {
            tally++;
          }
        })
      })
      return { ...acc, [toppingName]: tally }
    }, {})
    console.log(toppingAmounts)

    //reminder to ask self at the beginning if i need to return an object or an array! with this one, i tried map and while it was an easy fix to change to a reduce and use the spread operator, i should have read carefully in the beginning

    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = toppingAmounts;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    //classrooms data is an array of objects
    // need to create another array
    //need only the front end classrooms--is otherwise same as original array


    const frontEnd = classrooms.filter(classroom => classroom.program === "FE")

    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = frontEnd;
    return result;

    // Annotation:
    //when i create a variable and run filter on an array, it returns an array of objects that meets the conditions of the method. these objects are the full objects from the original array
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    //classrooms is an array of objects
    //the result should be one object with the keys feCapacity and beCapacity
    //the values of these keys are the total capacity for all classrooms in each program
    //need to create an object, calculate each total capacity, and assign these capacities to their respective keys

    const totalCapacity = classrooms.reduce((acc, classroom) => {
      if (classroom.program === "FE") {
        acc.feCapacity += classroom.capacity
      }
      if (classroom.program === "BE") {
        acc.beCapacity += classroom.capacity
      }
      console.log(acc)
      return acc
    }, { feCapacity: 0, beCapacity: 0 })


    const result = totalCapacity;
    return result;

    // Annotation:
    // I ran reduce over the classrooms array and used for the initial value an object with the necessary keys and values starting each at 0. then inside the reduce, created to if conditionals that would check to see if each classroom was backend or frontend and then add the capacity to the appropriate value in the accumulator object
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    //the classrooms data is an array of objects
    // i need to sort this array by capacity from least to greatest

    const sortedClassrooms = classrooms.sort((a, b) => (a.capacity - b.capacity) )

    const result = sortedClassrooms;
    return result;

    // Annotation:
    // i used a.capacity - b.capacity to check each element's capacity against the next element's capacity.

    // say a > b
    //if a - b returns a positive value, it means a is greater than b, and is placed later.
    //if i were to use b - a, it would returned a negative value and a would be placed earlier
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    //the dataset is an array of objects. the key temperature has the value of an object
    //need to return an array the same length as the original array in which each element is the average of the high and low temperature
    //map over weather array
    //for each element, add the values for high and low together, then divide by 2

    const averageTemps = weather.map(data => (data.temperature.high + data.temperature.low) / 2)

    const result = averageTemps;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const sunnyLocations = weather.filter(data => data.type === "sunny" || data.type === "mostly sunny")
    const sunnySentences = sunnyLocations.map(location => {
      return `${location.location} is ${location.type}.`
    })

    const result = sunnySentences;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    //dataset is an array of objects
    //need to return the object with the highest humidity
    //use sort on weather array and sort from highest to lowest
    //return the first element

    const orderedByHumidity = weather.sort((a, b) => b.humidity - a.humidity)
    const highestHumidity = orderedByHumidity[0]

    const result = highestHumidity;
    return result;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}


    //nationalParks is an array of objects. the activities key of each object has the value of an array
    //need to return an object
    //one key should be parksToVisit and the value should be an array of parks where visited === false
    //other key should be parksVisited and the value shoudl be an array of parks where visited === true


    let visited = [];
    let notVisited = [];
    nationalParks.forEach(park => {
      if (park.visited) {
        visited.push(park.name)
      } else {
        notVisited.push(park.name)
      }
    })
    const toVisit = { parksToVisit: notVisited, parksVisited: visited }



    const result = toVisit;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    //starting with an array of objects
      //reach for map, on each iteration i want to create an object
    //return a new array (same length) of objects with proprerty keys of location with values of name
    //know i need location and name, so can destructure to grab those variables

    //solution #1
    // const newParks = nationalParks.map(park => {
    //   return { [park.location]: park.name }
    // })

    //solution #2
    const newParks = nationalParks.map(park => {
      const { location, name } = park
      return { [location]: name }
    })

    const result = newParks;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    //i'm starting with one data set that is an array of objects about breweries.
    //inside of the brewery object, one of the keys has a value of an array of objects--each object in this nested array contains data about specific beers
      //start with map over the breweries array
      //when i iterate over each brewery, i want to store the name of the brewery, store the beercount (currentBrewery.beers.length) for that brewery, and then return and object with both of those data points
    //i need to return an array of objects
    //each object has 2 key-value pairs: brewery name and beer count

    const breweryBeerCount = breweries.map(brewery => {
      const breweryName = brewery.name;
      const brewBeerCount = brewery.beers.length;

      return { name: breweryName, beerCount: brewBeerCount }
    })

    const result = breweryBeerCount;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    //start with two arrays of objects
      //run map over instructors array
      //for each instructor, create an object
      //the key is instructor.name
      //need to find matching cohort in cohorts array
    //return an array(same length as instructors array) of objects in which each object has a key value pair of instructors.name paired with the student count from their module

    const formatStudentCount = instructors.map(instructor => {
      const instructorName = instructor.name
      const instructorCohort = cohorts.find(cohort => {
        return cohort.module === instructor.module
      })
      const studentCount = instructorCohort.studentCount
      return { name: instructorName, studentCount: studentCount }
    })

    const result = formatStudentCount;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    //start with two arrays of objects
      //need an array of objects--an object for each cohort, so i will probably map over cohorts
      //for each cohort, will need to calc how many studentCount and to use module data to access number of instructors from instructors arry
      //over each iteration, once i have student and teacher counts, calc ratio and construct an object to hold data
    //return an OBJECT of how many students per teacher there are in each cohort

      const studentTeacherRatio = cohorts.reduce((acc, cohort) => {
        const cohortName = `cohort${cohort.cohort}`;
        const numStudents = cohort.studentCount;
        let numTeachers = 0;
        instructors.forEach(instructor => {
          if (instructor.module === cohort.module) {
            numTeachers ++
          }
        })
        const ratio = numStudents/numTeachers;
        acc[cohortName] = ratio;
        return acc
      }, {})
      const result = studentTeacherRatio;
      return result;
    // Annotation:
    // Write your annotation here as a comment

  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    //bosses is an object in which the keys are bosses and their values are objects
    //sidekicks is an array of objects containing information about each sidekick

    //returning an array of objects--same length as number of bosses (map)
    //each object { bossname: , sidekickLoyalty: }

    //object keys of bosses
    //on each boss run reduce iterating over sidekicks and add loyalty to acc if boss = current boss

    const bossList = Object.keys(bosses);

    let bossLoyalty = bossList.map(boss => {
      const bossName = bosses[boss].name;
      const loyalty = sidekicks.reduce((acc, sidekick) => {
        if (sidekick.boss === bossName) {
          return acc + sidekick.loyaltyToBoss
        } else {
          return acc
        }
      }, 0)
      return { bossName: bossName, sidekickLoyalty: loyalty }
    })

    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = bossLoyalty;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    //start with object constellations
      //object values for constellations to get array of each of the constellation value objects
      //create an empty array
      //for each values object, push the stars array into the array
      //flat that

      //filter over stars and for each star iteration, i want to check if the name exists in the constellations array
    //return array of objects whose name appears in any of the constellation objects stars array

    const constellationValues = Object.values(constellations);
    // const allStars = [];
    // constellationValues.forEach(constellation => {
    //   allStars.push(constellation.stars)
    // })
    // const flatStars = allStars.flat();
    //
    const allStars = constellationValues.reduce((acc, currentConstellation) => {
      return acc.concat(currentConstellation.stars)
    }, [])

    const existingStars = stars.filter(star => allStars.includes(star.name))


    const result = existingStars;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
