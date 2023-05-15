const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  // seu código aqui
  const count = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      count.child += 1;
    } else if (person.age >= 50) {
      count.senior += 1;
    } else {
      count.adult += 1;
    }
  });
  return count;
};

const calculateEntry = (entrants) => {
  if (!entrants || !entrants.length) return 0;

  const ages = countEntrants(entrants);
  const child = ages.child * prices.child;
  const adult = ages.adult * prices.adult;
  const senior = ages.senior * prices.senior;

  return child + adult + senior;
  // seu código aqui
};

module.exports = { calculateEntry, countEntrants };
