# Exercise Lessons

Read this file after you've completed the different exercises. There are solutions and explanations here which allow you to reflect on the exercises and provide advice for rerunning the Code Kata to improve your skills.

## JS Code Kata - Functions

The goal of this *code kata* is to practice refactoring javascript code using different types of Javascript functions.

## Exercise 01 - Run the run function

- Goal 1: call the run function to run the program
- Goal 2: commit the change and push the result back to your github fork

This exercise is designed to be a no-brainer; replace the console log on line 23 with the statement `run()`, and you'll have completed Goal 1.

For Goal 2, add and commit your code then push to github.

```sh
git status
git add .
git commit -m "Completed Exercise 01"
git push
```

However, to get this far you will ideally have already installed node, forked and cloned the repository from github, and run `node exercise-01.js`.

These are core skills in starting up on a project, and are part of the training exercise.

Exercise 01 is completed, or *Done*, when the second goal - *commit the change and push the result back to your github fork* is complete. This step requires confidence in your solution, and enables you to share your work with others. It is not the solution that was important in this exercise; it was the process of completing the cycle of running, changing, testing, and committing code that holds value. This development cycle is carried forward into the remaining exercises.

## Exercise 02 - Implement the showRelation function

- Goal 1: populate the showRelation function to log out a relation between two people
- Goal 2: call the showRelation function three times, with parameters for each of the three cases
- Goal 3: commit the change and push the result back to your github fork

This exercise requires a few mental leaps of understanding.

First off, you need to spot the pattern between lines 19-21, and identify the variables. The function definition on line 26 helps towards this; we're looking for two names `n1` and `n2`, and a `relation`. The names are easy; they're `anna.name`, `beata.name`, and `carrie.name`. The relations are hidden away as strings; they're `friends`, `co-workers`, and `family`.

Secondly, you need to identify the pattern, and substitute the variables with the parameters.

So line 19:
```js
  console.log('>', anna.name, 'is', 'friends', 'with', carrie.name)
```

Becomes:
```js
  console.log('>', n1, 'is', relation, 'with', n2)
```

To complete Goal 1, on line 27, the comment `// implement this bit` can be replaced with:
```js
  console.log('>', n1, 'is', relation, 'with', n2)
```

For Goal 2, lines 18-21 can then be changed to:
```js
  showRelation(anna.name, carrie.name 'friends')
  showRelation(beata.name, carrie.name, 'co-workers')
  showRelation(carrie.name, beata.name, 'family')
```

For Goal 3, add and commit your code then push to github.

```sh
git status
git add .
git commit -m "Completed Exercise 02"
git push
```

This exercise shows how you can identify a repeating pattern in your code, and wrap it in a function; this principle is known as Don't Repeat Yourself, or DRY. By reducing duplication of `console.log(...)`, we can more easily control the format output the program by only defining the output in one place. Additionally we have added meaning by changing `console.log` to the action `showRelation`; this provides more context to the code by using language specific to the problem, making the program easier to understand.

## Exercise 03 - Write a new function called showAge

- Goal 1: write a new function called showAge, that displays the name and age of a person
- Goal 2: call the function, with parameters for each of the three people
- Goal 3: commit the change and push the result back to your github fork

The challenge here is to create and and call new function from scratch.

The good news is, we've just made one in Exercise 02 that almost does exactly what we need.

For Goal 1, on line 28, write:
```js
function showAge(name, age) {
  console.log('>', name, 'is', age, 'years old')
}
```

As with almost everything in programming, there are multiple solutions to this problem; so alternatively, this could be written:
```js
function showAge(person) {
  console.log('>', person.name, 'is', person.age, 'years old')
}
```

For Goal 2, on line 21, we can add:
```js
showAge(anna.name, anna.age)
showAge(beata.name, beata.age)
showAge(carrie.name, carrie.age)
```

Or if you'd gone with the second solution:
```js
showAge(anna)
showAge(beata)
showAge(carrie)
```

And if you were feeling extra optimal:
```js
people.forEach(showAge)
```

For Goal 3, add and commit your code then push to github.

```sh
git status
git add .
git commit -m "Completed Exercise 03"
git push
```

This exercise encourages you to write and call your own functions. This is much more straightforward; there is already the `showRelation` function to copy from Exercise 02, and simpler still, it only requires 1 or 2 parameters. The exercise also implicitly teaches you about dot syntax by accessing `.name`, `.age` on the `anna`, `beata`, and `carrie` objects.

## Exercise 04

- Goal 1: write a new function called calculateQuantity to count the total number of items sold
- Goal 2: use the calculateQuantity function with receipts.reduce(...) to assign the correct value to totalQuantitySold
- Goal 3: commit the change and push the result back to your github fork

This exercise illustrates how functions can be passed around like variables. Rather then calling a function directly e.g. `fn(a, b)`, we need to pass our function as a variable into `receipts.reduce(...)`, which is an inbuilt utility function of an array. For each item in the array, reduce will execute our function with an accumulator, and the next item in the array. We start the accumulator at 0, and then increment the accumulator by calculating its new value, and then returning it from the function.

For Goal 1, replace the comment on line 28 with:
```js
function calculateQuantity(accumulator, item) {
  return accumulator + item.quantity
}
```

For Goal 2, modify line 18 to:
```js
  let totalQuantitySold = receipts.reduce(calculateQuantity, 0)
```

For Goal 3, add and commit your code then push to github.

```sh
git status
git add .
git commit -m "Completed Exercise 04"
git push
```

## Next Steps

### Beginners

If you struggled to work out from the existing code how to get to these solutions, then go through the Code Kata again. You can delete your Fork in github, Re-fork, and repeat this Code Kata until you are confident with checking out code, running programs, writing functions in javascript, and committing back to github. The solutions will obviously stay the same, but you'll need to figure that out from the code, not simply by memorizing what to type. You might change your approach each time as you begin to understand the problem.

### Advanced

If you found this was too easy; check your timings. How long did it take to complete all the exercises? Consider repeating the Code Kata from scratch to see how fast you can go. Sharpen your skills, and become confident with refactoring code and writing functions. If you make mistakes, note them down. Understand what you missed, and repeat until you have these skills perfected. Make a calendar note to come back in a week, or month, and try again.

### Challenge Mode

Find a blank laptop or PC, without git or node installed. How fast can you get up to speed *and* complete all these exercises? How would you go about creating a blank environment to work in? What about if you had to register a new github account as well?
