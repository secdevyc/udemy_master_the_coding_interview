//READABLE
//Memory - Space Complexity
////Speed - Time Complexity
//
//HEAP - store variables
//STACK - keep track of function calls
//
//What causes Space Complexity
//variables
//Data sTructures
//Function call
//Allocations

//=============================
//===  SPACE COMPLEXITY  =======
//=============================

function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooo!');
  }
}

boooo([1,2,3,4,5,]); //time complexity of function is a WIN

//Space complexity : is O(1) - not adding anymore SPACE

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

console.log(arrayOfHiNTimes(6)); //O(n) - b/c we're creating a new data structure and adding more memory so each item is a new memory space
