const { getRandom0to100 } = require('./exercise1');
const {  function1, function2, function3 } = require('./exercise4.js');

jest.mock('./exercise1.js');
// jest.mock('./exercise4.js');

describe('test the all the functions on block 10.3', () => {
  it('test if getRandom0to100 return the right number', () => {
    const getRandom0to100 = jest.fn().mockReturnValue(10);
    expect(getRandom0to100()).toBe(10);
    expect(getRandom0to100).toHaveBeenCalledTimes(1);
    expect(getRandom0to100).toHaveBeenCalledWith();
  });

  it('should change the getRandom0to100 with mockImplementation and divide number1 / number2', () => {
    const number1 = 50; 
    const number2 = 5;
    // const getRandom0to100 = jest.fn().mockImplementation((number1, number2) => number1 / number2);
    getRandom0to100.mockImplementation((number1, number2) => number1 / number2);
    expect(getRandom0to100(number1, number2)).toBe(10);
    expect(getRandom0to100).toHaveBeenCalledTimes(1);
    expect(getRandom0to100).toHaveBeenCalledWith(50, 5)
  });

  it('getRandom0to100 receive 3 parameters and multiply them', () => {
    const number1 = 3;
    const number2 = 4;
    const number3 = 2;
    const getRandom0to100 = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);
    expect(getRandom0to100(number1, number2, number3)).toBe(24);
    expect(getRandom0to100).toHaveBeenCalledTimes(1);
    expect(getRandom0to100).toHaveBeenCalledWith(3, 4, 2);
    expect(getRandom0to100).toHaveBeenCalledWith(number1, number2, number3);
    getRandom0to100.mockImplementation((num) => num * 2);
    expect(getRandom0to100(5)).toBe(10); 
    expect(getRandom0to100).toHaveBeenCalledTimes(2);
    expect(getRandom0to100).toHaveBeenCalledWith(5);
  });

  it('should change the function1', () => {
    const function1 = jest.fn();
    function1.mockImplementation(string => string.toLowerCase());
    expect(function1('Renan')).toBe('renan');
  });
  
  it('should change the function2 to return the last word of a string', () => {
    const function2 = jest.fn().mockImplementationOnce(string => string[string.length - 1]);
    expect(function2('Renan')).toBe('n');
  });

  it('should change the function3 to concatenate 3 strings', () => {
    const function3 = jest.fn().mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);
    expect(function3('Renan', 'Moraes', 'Dev')).toBe('Renan Moraes Dev');
  });
})

