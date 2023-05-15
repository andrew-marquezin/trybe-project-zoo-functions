const data = require('../data/zoo_data');

const isManager = (id) => {
  // seu código aqui
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const managers = [stephanieId, olaId, burlId];
  return managers.includes(id);
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managed = data.employees.filter((employee) => employee.managers.includes(managerId));
  const managedArray = managed.map((person) => `${person.firstName} ${person.lastName}`);
  return managedArray;
};

module.exports = { isManager, getRelatedEmployees };
