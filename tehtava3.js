const persons = require('./constants.js').persons;

const calculateAverageAge = () => {
  let totalAges = 0;
  persons.forEach((person, i) => totalAges += new Date().getFullYear() - person.dateOfBirth.getFullYear());
  return totalAges / persons.length;
}

console.log(calculateAverageAge());
