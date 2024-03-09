import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './sum.js';

test('A capitalize function that takes a string and returns it with the first character capitalized.', () => {
    expect(capitalize('hola')).toBe('Hola');
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
});

test('A reverseString function that takes a string and returns it reversed.', () => {
    expect(reverseString('hola mundo!')).toBe('!odnum aloh');
    expect(reverseString('pistacho')).toBe('ohcatsip');
    expect(reverseString('')).toBe('');
});

test('A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, -3)).toBe(-4);
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(-1, 2)).toBe(-3);
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(-1, -2)).toBe(0.5);
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(-1, 3)).toBe(-3);
});

test('A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.', () => {
    expect(caesarCipher('Hola', 27)).toBe('Ipmb');
    expect(caesarCipher('a.1.B', 3)).toBe('d.1.E');
    expect(caesarCipher('', 1)).toBe('');
    expect(caesarCipher('hola', 0)).toBe('hola');
    expect(caesarCipher('hola', -1)).toBe('gnkz');
    expect(caesarCipher('hola', -26)).toBe('hola');
});

test('An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({"average": 4, "length": 6, "max": 8, "min": 1});
    expect(analyzeArray([-2,6,20])).toEqual({"average": 8, "length": 3, "max": 20, "min": -2});
    expect(analyzeArray([5,'F'])).toEqual(null);
});