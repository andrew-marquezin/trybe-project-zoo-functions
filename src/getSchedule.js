const data = require('../data/zoo_data');

const isDay = (entry) => Object.keys(data.hours).includes(entry);
const isAnimal = (entry) => data.species.some((animal) => animal.name === entry);
const mondayObj = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

const getAnimalsAvailable = (day) => data.species
  .filter((element) => element.availability.includes(day))
  .map((animal) => animal.name);

const assembleDayObj = (day) => {
  const dayObj = {};

  dayObj[day] = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: getAnimalsAvailable(day),
  };
  return dayObj;
};

const assembleWeekSchedule = () => {
  const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const weekObj = {};
  week.forEach((day) => {
    if (day === 'Monday') {
      weekObj[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      weekObj[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: getAnimalsAvailable(day),
      };
    }
  });
  return weekObj;
};

const getSchedule = (scheduleTarget) => {
  if (isDay(scheduleTarget)) {
    if (scheduleTarget === 'Monday') return mondayObj;
    return assembleDayObj(scheduleTarget);
  }
  if (isAnimal(scheduleTarget)) {
    return data.species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return assembleWeekSchedule();
  // seu código aqui
};

module.exports = getSchedule;
