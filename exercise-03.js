/*
  JS Code Kata - Functions - Exercise 03
  Goal 1: write a new function called showAge, that displays the name and age of a person
  Goal 2: call the function, with parameters for each of the three people
  Goal 3: commit the change and push the result back to your github fork
  Next: Finished for now, check back later for more exercises
*/

let anna = { name: 'Anna', age: 36 }
let beata = { name: 'Beata', age: 28 }
let carrie = { name: 'Carrie', age: 31 }

let people = [anna, beata, carrie]
let names = people.map(person => person.name)


function run() {
  showRelation(anna.name, 'friends', beata.name)
  showRelation(beata.name, 'co-workers', carrie.name)
  showRelation(carrie.name, 'family', beata.name)

  console.log('I know the names of', names)
}

function showRelation(n1, n2, relation) {
  console.log('>', n1, 'is', relation, 'with', n2)
}

run()
