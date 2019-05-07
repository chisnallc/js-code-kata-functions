/*
  JS Code Kata - Functions - Exercise 02
  Goal 1: populate the showRelation function to log out a relation between two people
  Goal 2: call the showRelation function three times, with parameters for each of the three cases
  Goal 3: commit the change and push the result back to your github fork
  Next: Start Exercise 03
*/

let anna = { name: 'Anna', age: 36 }
let beata = { name: 'Beata', age: 28 }
let carrie = { name: 'Carrie', age: 31 }

let people = [anna, beata, carrie]
let names = people.map(person => person.name)


function run() {
  // replace these with calls to showRelation
  showRelation(anna.name,beata.name, 'friends')
  showRelation(beata.name,carrie.name, 'co-workers')
  showRelation(carrie.name,anna.name,'family')

  console.log('I know the names of', names)
}

function showRelation(n1, n2, relation) {
  console.log(n1,'is', relation,'with', n2)
}

run()

