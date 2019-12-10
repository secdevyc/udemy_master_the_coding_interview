// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1) runs once
  a = 50 + 3; //O(1) runs once

  for (let i = 0; i < input.length; i++) { //O(n)
    anotherFunction(); //O(n) runs as many times as loop happens
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge();

//BIG O = 3 O(1) + 4n
