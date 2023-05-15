const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  if (!animal) {
    const retorno = {};
    data.species.forEach((bicho) => {
      retorno[bicho.name] = bicho.residents.length;
    });
    return retorno;
  }
  const filtrado = data.species.find((item) => animal.species === item.name);
  if (Object.keys(animal).length > 1) {
    return filtrado.residents.filter((residente) => residente.sex === animal.sex).length;
  }
  return filtrado.residents.length;
};
// console.log(countAnimals());

module.exports = countAnimals;
