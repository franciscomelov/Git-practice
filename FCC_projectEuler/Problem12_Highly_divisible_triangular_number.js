// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Let us list the factors of the first seven triangle numbers:

// 1: 1
// 3: 1, 3
// 6: 1, 2, 3, 6
// 10: 1, 2, 5, 10
// 15: 1, 3, 5, 15
// 21: 1, 3, 7, 21
// 28: 1, 2, 4, 7, 14, 28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over n divisors?

//--------------------------------------------------------
let numero
function triangularNumber(n){
  let sum=0
  
  for(let i =1; i<=n; i++){
   sum += i
  }

  return sum
}




function factors(n){
   let num =triangularNumber(n)
   let divs = [];

  for(let i =1; i<=num;i++){
    if(num%i==0){
      divs.push(i)
    }
  }
  return divs

}




//-------------------------------------

function divisibleTriangleNumber(n) {
  // Good luck!
let num ;
let i=1
let length =factors(1).length
  while(length <= n){
  
      num= factors(i)
      length = num.length
   

    i++;
  }
  
  return   num[num.length-1]
}

console.log(divisibleTriangleNumber(5))