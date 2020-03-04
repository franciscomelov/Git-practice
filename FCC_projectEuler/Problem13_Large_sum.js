// Project Euler: Problem 13: Large sum
// Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-13-large-sum

function largeSum(arr) {
  let sum =0;
  let num="";
  for(let i =0;i<arr.length;i++){
    sum += Number(arr[i])
  }


  sum = sum.toString()
  console.log(sum)
  for(let i=0;num.length<10;i++){
    if(sum[i] != "."){
      num+= sum[i]
    }
    

  }



  return Number(num);
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(fiftyDigitNums));
