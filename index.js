// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
const newDriver = ["Ralph"]
function destructivelyAppendDriver(name){
return drivers.splice(3, 0, 'Ralph');
}

function destructivelyPrependDriver(name){
  return drivers.splice(0,0, 'Bob');
}

function destructivelyRemoveLastDriver(name){
  return drivers.splice(-1);
}

function destructivelyRemoveFirstDriver(name){
  return drivers.splice(0,1);
}

function appendDriver(name){
  return [...drivers, name];
}

function prependDriver(name){
  return [name,...drivers];
}

function removeLastDriver(name){
  return drivers.slice(0,drivers.length-1);
}

function removeFirstDriver(name){
  return drivers.slice(1);
}
