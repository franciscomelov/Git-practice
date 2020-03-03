A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
 let sumOfabc=a+b+c
 // Good luck!

let a = Math.floor(n/6)
let b =Math.floor(n/3)
let c = Math.sqrt(a**2 + b**2)

while(sumOfabc !== n){
    sumOfabc = a+b+c;

    for( b =a+1; b< n/2;b++){
        c = Math.sqrt(a**2 + b**2)
        sumOfabc = a+b+c;
        if(sumOfabc == n){
            break;
        }
    }
  
         if(sumOfabc == n){
            break;

        }
            
    a++
}

  
           
    console.log(a,b,c,"|", a+b+c, a*b*c)

 
 return a*b*c;
}

specialPythagoreanTriplet(1000);