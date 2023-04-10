/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 *    
 *    This function is async, so it expects some of the code inside of it to resolve
 *    asyncronously as promises. The await is used when calling greet() and uppercaser()
 *    to cause our async function to await the resolution of the promise returned by these 
 *    functions before moving on. The function will return a promise.
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 *    
 *    Promise { <pending> }. The method returns a promise, which is logged immediately
 *    because it was called syncronously.
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 *    The second block works as intended and resolves the promise to a string, so the
 *    message HELLO THERE, DUCKY is logged.
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

function spacer(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === 'string') {
        resolve(str.split('').join(' '));
    } else {
        reject('Argument to spcaer must be string');
    }
    }, 2000);
  })
}

async function greetAndUppercase(name) {
    greeting = await greet(name);
    uppercasedGreeting = await uppercaser(greeting);
    spacedGreeting = await spacer(uppercasedGreeting);
    return spacedGreeting;
}

/* Uncomment me! #1 */
result = greetAndUppercase('Ducky')
console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })