const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
const id = person.id;
const age = person.age;
const json = JSON.stringify({id, age});

console.log(json); // Should return: { id: 1, age: 25 }