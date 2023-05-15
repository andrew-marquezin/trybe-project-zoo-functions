const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('sem parametros, retorna undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  it('recebendo um parâmetro que não é uma string, retorna um erro de parâmetro inválido', () => {
    const actual = handlerElephants(34);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
  it('recebendo parametros validos, retorna os valores corretos', () => {
    {
      const actual = handlerElephants('count');
      const expected = 4;
      expect(actual).toBe(expected);
    }
    {
      const actual = handlerElephants('names');
      const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants('averageAge');
      const expected = 10.5;
      expect(actual).toBe(expected);
    }
    {
      const actual = handlerElephants('location');
      const expected = 'NW';
      expect(actual).toBe(expected);
    }
    {
      const actual = handlerElephants('popularity');
      const expected = 5;
      expect(actual).toBe(expected);
    }
    {
      const actual = handlerElephants('availability');
      const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
      expect(actual).toEqual(expected);
    }
    {
      const actual = handlerElephants('stringInvalida');
      const expected = null;
      expect(actual).toBe(expected);
    }
  });
});
