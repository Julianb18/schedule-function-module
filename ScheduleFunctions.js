const storedFunctions = [];

/**
 * Groups any given function with its arguments in an object and stores the object in an array
 *
 * @param func - requires a function
 * @param args - can take any number of arguments
 */

const StoreFuncsAndArgs = (func, ...args) => {
  let funcWithArgs = {
    storedFunc: func,
    storedArgs: [...args],
  };

  storedFunctions.push(funcWithArgs);
};

const functionResults = [];

/**
 * Loops through the given array and calls the functions with their respective arguments
 *
 * @param functionAndArgList - should be an array of objects containing a function with its arguments
 */

const CallStoredFunctions = (functionAndArgList) => {
  for (const funcAndArgs of functionAndArgList) {
    functionResults.push(funcAndArgs.storedFunc(...funcAndArgs.storedArgs));
  }
};

module.exports = { StoreFuncsAndArgs, CallStoredFunctions };
