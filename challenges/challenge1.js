/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *    
 *     Step 1, then Step 3, then Step 2. First the snooze function is declared.
 *     Then Step 1 is logged to the console. Then snooze is called with an anonymous
 *     function that logs Step 2 followed by Async Action completed via callback.
 *     The snooze function uses setTimeout to wait 2000ms before executing the action
 *     (the anonymous function that was passed to it). The node does not wait for this;
 *     it exits the blog and logs Step 3, and then when the timeout has passed Step 2
 *     is logged.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *    
 *    Step 1
      Step 3
      Step 2
      Async Action completed via callback
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    Step 1, Step 2, Async Action completed via callback Step 3. Without the tiemout
 *    delay this function will resolve syncronously.
 *    
 *    I was incorrect. It would appear that calling setTimeout with a time argument of 0
 *    still results in this resolution being pushed below the code that occurs after it.
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

