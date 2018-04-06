/*
  JS Code Kata - Functions - Exercise 04
  Goal 1: write a new function called calculateQuantity to count the total number of items sold
  Goal 2: use the calculateQuantity function with receipts.reduce(...) to assign the correct value to totalQuantitySold
  Goal 3: commit the change and push the result back to your github fork
  Next: Read EXERCISE-LESSONS.md
*/

let receipts = [
  { item: 'Chocolate Bar', quantity: 2, cost: 40 },
  { item: 'Soft Drink', quantity: 3, cost: 65 },
  { item: 'Crisps Multipack', quantity: 5, cost: 120}
]


function run() {
  let totalInPence = receipts.reduce(calculateTotal, 0)
  let totalQuantitySold = 0

  let totalInPounds = (totalInPence / 100)
  console.log('Total cost of', totalQuantitySold, 'items is', `£${totalInPounds.toFixed(2)}`)
}

function calculateTotal(accumulator, item) {
  return accumulator + (item.cost * item.quantity)
}

// write a new function to calculate the total quantity

run()
