class Person {
  constructor(firstname, lastName, age){
    this.firstName = firstname;
    this.lastName = lastName;
    this.age = age;
  }

  /* ??????????????? 
Non ho ben capito cosa devo aggiungere come getter e setter. Aggiungendo le righe commentate di sotto mi da errore ad esempio
Il codice attualmente in uso risulta funzionante.

  get firstName() {
    return this.firstName
  }
  get lastName() {
    return this.lastName
  }


  set firstName(firstName) {
    this.firstName = firstName;
  }
  set lastName(lastName) {
    this.lastName = lastName;
  }

  ???????????????? */
  

  get fullName(){
    return this.firstName + " " + this.lastName
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);