// en välttämttä ymmärtänyt tehtävänantoa oikein joten tein sitten tämmöisen.
// jos henkilö löytyy etunimellä, functio palauttaa kyseisen henkilö objectin
// jos henkilöä ei löydy, tehtävä palauttaa tyhjän objectin

const persons = require('./constants.js').persons;

const findByFirstName = (firstname) => {
  const personExist = persons.some(person => getFirstname(person.name) === firstname);
  return personExist ? persons.find(person => getFirstname(person.name) === firstname) : {};
};

const getFirstname = (fullname) => {
  return fullname.substring(0, fullname.indexOf(" "));
};


console.log(findByFirstName('Outi'));
console.log(findByFirstName('Seppo'));
console.log(findByFirstName('Testaaja'));
console.log(findByFirstName('Teppo'));
