// Project Euler: Problem 14: Longest Collatz sequence
// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under the given limit, produces the longest chain?

// Note: Once the chain starts the terms are allowed to go above one million.

function collatz (n){
  let arr=[n]
  let num = n;

  while(num != 1){
    if(num%2 == 0){
      num = num /2;
      arr.push(num)
    } else{
      num = num * 3 +1
      arr.push(num)
    }
    

  }

  return arr
}



function longestCollatzSequence(limit) {
  let higher=0;
  let comp;
  let num=0;
  // Good luck!
  for (let i = limit; i >= 1;i--){
    comp = collatz(i).length
    
    if (comp > higher){
      
      higher = comp
     num = collatz(i)[0]
    }


  }

  return num;
}

console.log(longestCollatzSequence(100000));