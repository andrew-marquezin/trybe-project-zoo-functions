const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const animalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = data.species.find((animal) => animal.id === animalId);

  const oldestAnimal = firstAnimal.residents.reduce((lastAnimal, currentAnimal) =>
    (currentAnimal.age > lastAnimal.age ? currentAnimal : lastAnimal));
  return Object.values(oldestAnimal);
};

module.exports = getOldestFromFirstSpecies;
