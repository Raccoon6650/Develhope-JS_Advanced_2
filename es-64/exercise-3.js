let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore.push(newNumber);
console.log(numberStore);

numberStore = numberStore.concat(newNumber);
console.log(numberStore);