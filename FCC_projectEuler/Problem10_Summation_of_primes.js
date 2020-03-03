function  possiblePrime(n){
  // crea un array de posible primos
  //para reducir la lista
  let pos =[2,3]
  let test=0;

  for(let i=1; test<n;i++){
   
    test = 6 * i - 1
    if(test>n-1){
      break;
    }
    pos.push(test)
    test = 6 * i + 1
    if(test>n-1){
      break;
    }
    pos.push(test)
  }
 return pos

}



function primeSummation(n) {
  var pos= possiblePrime(n)
  let prime =[2,3]
  let sum =0;

  for(let i = 2;i< pos.length;i++){
    let compare = Math.ceil(Math.sqrt(pos[i]))
    
    for(let j=3; j<= compare;j+=2){
      //si un numero de la lista no es primo lo convierte en cero
     // console.log(pos[i], j)

      if(pos[i]%j==0){
        pos[i]=0;
        break;
      }
    }
    if(pos[i] !==0){
      prime.push(pos[i])

    }
  }

 for(let i =0;i<prime.length;i++){
  sum += prime[i]
 }
 
  return sum;

}

 console.log(primeSummation(2000000));
