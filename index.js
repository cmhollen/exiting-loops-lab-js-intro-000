function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] !== stopValue){
      array[i] = changeValue
      break;
    }

  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] !== stopValue){
      array[i] = changeValue
      continue;
    }

  }
  return array;
}

function findBy(array, findFn){
  array.forEach(element => {
    if (element != findFn){
      return null;
    }
  })
}
