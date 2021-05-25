const { sum } = require('./exercise1.js');
const { myRemove } = require('./exercise2.js')
describe('Testa as funções do ex1', () => {
  test('Teste se a função existe', () => {
    expect(typeof sum).toBe('function');
  });
  test('Testa alguns resultados', () => {
    expect(sum(2, 3)).toEqual(5);
    expect(sum(0, 0)).toEqual(0);
  })
  // test('Testa se retorna erro ao entrar com um valor que não seja do tipo Number', () => {
  //   expect(sum(3, '5')).toThrow('parameters must be numbers');
  // })
}) 

describe('Testa as funções do exercício 2', () => {
  it('Testa se a função existe', () => {
    expect(typeof myRemove).toBe('function');
  });
  it('Testa se a função retorna o valor que deveria', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    let originalArray = [1, 2, 3];
    expect(()myRemove([originalArray, 3)).toEqual();
    
  })
})