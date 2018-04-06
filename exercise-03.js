/*
  JS Code Kata - Functions - Exercise 03
  Goal 1: write a new function called showAge, that displays the name and age of a person
  Goal 2: call the function, with parameters for each of the three people
  Goal 3: commit the change and push the result back to your github fork
  Next: Start Exercise 04
*/

let anna = { name: 'Anna', age: 36 }
let beata = { name: 'Beata', age: 28 }
let carrie = { name: 'Carrie', age: 31 }

let people = [anna, beata, carrie]
let names = people.map(person => person.name)


function run() {
  showRelation(anna.name, beata.name, 'friends')
  showRelation(beata.name, carrie.name, 'co-workers')
  showRelation(carrie.name, beata.name, 'family')

  console.log('I know the names of', names)
}

function showRelation(n1, n2, relation) {
  console.log('>', n1, 'is', relation, 'with', n2)
}

run()
