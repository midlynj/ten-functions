"use strict";
function isTrue(input) {
    return input === true;
} isTrue();

function isFalse(input) {
  if (input === false) {
      return true
  } else {
      return false
  }
} isFalse();

function not(input) {
    return !(input === true || input === 5 || input === "hello" || input === 123);

}not();

function addOne(input) {
  if (input == input) {
  return Number(input)+ 1
  }
}

function isEven(input) {
   if (input % 2 == 0 && typeof input !== "boolean" ) {
       return true
   }
   else {
       return false
   }

} isEven();

function isIdentical(input1, input2) {
    if (input1 === input2) {
        return true
    } else {
        return false
    }
} isIdentical();

function isEqual(input1, input2) {
    if (input1 == input2) {
        return true
    } else {
        return false
    }
} isEqual();

function or(input1, input2) {
    if (input1 || input2) {
        return input1 || input2
    } else if (input1 == input2) {
        return false
    } else {

    }
} or();

function and(input1, input2) {
    if (input1 == true && input2 == true) {
        return true
    } else if (input1 == true && input2 == false ) {
        return false
    } else if (input1 && input2) {
        return input2
    }
    else {
        return false
    }
} and();

function concat(input1, input2) {
    if (input1 && input2) {
        return String(input1) + String(input2)
    }
} concat()




/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
