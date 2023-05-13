const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  if (ids) {
    // console.log('🍌');
    return data.species.filter((item) => ids.includes(item.id));
  }

  return [];
};

module.exports = getSpeciesByIds;
