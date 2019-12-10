// GOOD code is
// READABLE
// SCALABLE

//============================
//=== LINEAR TIME      =======
//============================
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marline', 'nemo', 'gill', 'bloat', 'nigel', 'squiret', 'darla']
//
// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found Nemo!');
//     }
//   }
//   let t1 = performance.now();
// }
//
// findNemo(nemo);
// console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');

//to find runtime = performance.new().

//#1 -- For loop in Javascript.
// const fish = ['dory', 'bruce', 'marlin', 'nemo'];
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(10).fill('nemo');
//
// function findNemo2(fish) {
//   // let t0 = performance.now();
//   for (let i = 0; i < fish.length; i++) {
//     if (fish[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
//   // let t1 = performance.now();
//   // console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
// }
//
// findNemo2(everyone) //O(n) --> Linear Time

//good code can be scalable without the runtime being longer
//
//Big O concerns us with how steps are in an operation
//
//O(n) ---> more input = more operations

//====================================
//===  CONSTANT TIME      ============
//====================================
const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
  logFirstTwoBoxes(boxes[0]); //0[1]
  logFirstTwoBoxes(boxes[1]); //0[2]
}

logFirstTwoBoxes(boxes) //0(1) - Constant Time

// no matter the number of elements, it's going always run the same
