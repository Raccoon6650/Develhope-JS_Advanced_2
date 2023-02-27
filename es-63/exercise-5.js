const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
person.name = person.firstName;
person.surname = person.lastName;
person.old = person.age;


const { id, name, surname, old } = keys.person;
console.log(id, name, surname, old);