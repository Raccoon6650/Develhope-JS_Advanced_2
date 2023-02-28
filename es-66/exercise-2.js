const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

console.log(id, personInfo);


//------------------------------------

const person_ = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
const id_ = person_.id;

let info = {...person_};
delete info.id;
console.log (person_.id, info);