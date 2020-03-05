// Rosetta Code: 100 doors
// There are 100 doors in a row that are all initially closed.
//  You make 100 passes by the doors. The first time through, visit every door and 'toggle' 
//  the door (if the door is closed, open it; if it is open, close it). The second time, only
//   visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door
//    (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

// Implement a function to determine the state of the doors after the last pass. Return the final result 
// in an array, with only the door number included in the array if it is open.

function getFinalOpenedDoors(numDoors) {
  let doors = [0]
  let openDoor=[]
  let currentDoor =1
  // crea las puertas
  for(let i = 0;i<numDoors;i++){
    doors.push("closed");
  }


// pasa por las puertas y abre o cierra
while(currentDoor <= numDoors){
  for(let i =1; i<doors.length;i++ ){
    if(i % currentDoor == 0) {
      if(doors[i]=="closed"){ 
        doors[i] = "open";
      } else{
        doors[i] = "closed";
      }
    }

  }
  currentDoor ++
}

// crea un nuevo array con solo el nuero de las puertas que esta abiertas
for(let i = 1;i<doors.length;i++){
  if(doors[i] == "open"){
    openDoor.push(i)
  }
}

return openDoor

  // Good luck!
}

console.log(getFinalOpenedDoors(100))