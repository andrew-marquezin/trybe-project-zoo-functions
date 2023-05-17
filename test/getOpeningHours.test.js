const getOpeningHours = require('../src/getOpeningHours');

// Use o comando npm test getOpeningHours para verificar se seus testes estão passando;

// Use o comando npm run test:coverage para testar a cobertura;

// O nome do dia da semana passado como argumento tem que ser em inglês;

// O horário precisa ter a seguinte formatação 'XX:XX-XM';

// As horas serão validadas na nomenclatura 'AM' e 'PM';

// A função não faz diferenciação entre maiúsculas e minúsculas;

describe('Testes da função getOpeningHours', () => {
  it('não passando argumentos, deverá retornar o objeto com todos os horários', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();

    expect(actual).toEqual(expected);
  });

  it('para os argumentos válidos, deve retornar a string adequada', () => {
    const open = 'The zoo is open';
    const closed = 'The zoo is closed';

    expect(getOpeningHours('Monday', '12:00-AM')).toBe(closed);
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
    expect(getOpeningHours('Thursday', '12:30-PM')).toBe(open);
  });

  it('para os argumentos inválidos, deve retornar o erro adequado', () => {
    const invalidDay = 'The day must be valid. Example: Monday';
    const invalidAbb = 'The abbreviation must be \'AM\' or \'PM\'';
    const invalidHour = 'The hour should represent a number';
    const invalidMinute = 'The minutes should represent a number';
    const invalidHourInterval = 'The hour must be between 0 and 12';
    const invalidMinuteInterval = 'The minutes must be between 0 and 59';

    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(invalidDay);
    expect(() => getOpeningHours('Monday', '09:00-KZ')).toThrowError(invalidAbb);
    expect(() => getOpeningHours('Monday', 'O9:00-AM')).toThrowError(invalidHour);
    expect(() => getOpeningHours('Monday', '09:0O-AM')).toThrowError(invalidMinute);
    expect(() => getOpeningHours('Monday', '66:00-AM')).toThrowError(invalidHourInterval);
    expect(() => getOpeningHours('Monday', '09:66-AM')).toThrowError(invalidMinuteInterval);
  });
});
