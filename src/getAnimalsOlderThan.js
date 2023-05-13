const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, idade) => {
  const arrayFilter = data.species.find((item) => item.name.toLowerCase() === animal.toLowerCase());
  const checkAge = (element) => element.age >= idade;
  return arrayFilter.residents.every(checkAge);
  // seu código aqui
};

module.exports = getAnimalsOlderThan;
