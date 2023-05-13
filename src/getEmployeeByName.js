const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName) {
    return data.employees
      .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  }

  return {};
  // seu código aqui
};

module.exports = getEmployeeByName;
