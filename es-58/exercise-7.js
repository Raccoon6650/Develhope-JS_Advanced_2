class Person {
  firstname;
  lastname;
  age;
  constructor(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }


  set firstname(fname) {
    this.firstname = fname;
  }

  get firstname() {
    return this.firstname
  }

  set lastname(lname) {
    this.lastname = lname;
  }

  get lastname() {
    return this.lastname
  }


set age(n_age){
  this.age = n_age
}

get age (){
  return this.age
}
  

  get fullname(){
    return this.firstname + " " + this.lastname
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullname);

person.firstname = 'Maria';
person.lastname = 'Verdi';
console.log(person.fullname);