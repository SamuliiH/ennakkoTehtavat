const persons = require('./constants.js').persons;

const findPersonAge = (name) => {
  const birthDay = persons.find(person => person.name === name).dateOfBirth.getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthDay;
};
console.log(findPersonAge("Teuvo Testaaja"));
console.log(findPersonAge("Outi Ohjelmoija"));
