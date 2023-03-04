const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
person.name = person.firstName;
person.surname = person.lastName;
person.old = person.age;


const { id, name = person.firstName, surname = person.lastName, old = person.age} = person;
console.log(id, name, surname, old);
