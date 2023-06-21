// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

var cv = {
"ONE HUNDRED": 100,
TWENTY: 20,
TEN: 10,
FIVE: 5,
DOLLAR: 1,
QUARTER: 0.25,
DIME :0.1,
NICKEL: 0.05,
PENNY: 0.01,
}
var item;


function checkCashRegister(price, cash, cid) {
  var change;
  let give = cash - price

  for( item in cv ){

    if(give/cv[item]>=1){
      console.log(item, cv[item])
 
    }
    
  }
  for( item in cid){
    console.log(cid[item][0])
  }

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
