//   x=
//  Ex =+
var output = document.getElementById('output')





function toFixed(num, fixed) { //numero de decimales from stack overflow 
  var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return num.toString().match(re)[0];
}


function fac(n){ // genera facorial
  let mul=1;

  for(let i =n; i >= 1; i--){
    mul = mul* i
}
  return mul
}


function serie (x, n,e){
  let Ex = [1,1+x]
  let formula=["1","1 + x"]
  let op =0;
  let i =2

while(true){
  op =Ex[Ex.length-1]+(x**i/fac(i))
  op = Number(toFixed(op, n))
  Ex.push(op)

  formula.push( `${formula[formula.length-1]} + x**${i} / fac(${i})` )


  if(op >= e){ 
    break; 
  }
  i++;
}

for(let j = 0; j<Ex.length;j++){

  document.write("<strong>e",j+1,"</strong> = " ,formula[j]," = ", "<strong>",Ex[j],"</strong> ", "<br>" );
  document.write("<br>") 
}

console.log(Ex.length)
console.log(Ex)
}

serie(3.5, 4, 33.1148)
//   (valor inical de x,  numero de decimales, valor final)




