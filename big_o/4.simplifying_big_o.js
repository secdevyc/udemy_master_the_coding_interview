//BIG O - RULE BOOK

// WORST case


// REMOVE CONSTANTS


// DIFFERENT TERMS FOR INPUTS

// anything that happens one after another you add ( a + b )
// anything nested should be multiplied ( a * b )

// DROP THE NON-DOMINANT TERMS
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

//BIG-O (n + n^2) dropping the non-dominant term is  dropping (n)
