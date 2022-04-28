const { expect } = require('expect');
import { it } from '@jest/globals';
import { test } from '@jest/globals';
import { reverseString, capitalizeFirst, calculator, caesarCipher, analyzeArray } from './practice.js';

test('capitalize single lower case', () => {
  const str = "hello";
  expect(capitalizeFirst(str)).toBe('Hello');
});

test('capitalize single upper case', () => {
  const str = "HELLO";
  expect(capitalizeFirst(str)).toBe('Hello');
});

test('capitalize single leetcase', () => {
  const str = "hElLO";
  expect(capitalizeFirst(str)).toBe('Hello');
});

test('capitalize multi regcase', () => {
  const str = "Hello, World!";
  expect(capitalizeFirst(str)).toBe('Hello, world!')
});

test('capitalize multi UPPER case', () => {
  const str = "HELLO, WORLD!";
  expect(capitalizeFirst(str)).toBe('Hello, world!')
});

it('reverse string', () => {
  const str = "Hello, World!";
  expect(reverseString(str)).toBe('!dlroW ,olleH');
});

it('calculator: add', () => {
  const a = 2, b = 2;
  expect(calculator.add(a, b)).toBe(4);
});

it('calculator: subtract', () => {
  const a = 2, b = 2;
  expect(calculator.subtract(a, b)).toBe(0);
});

it('calculcator: divide', () => {
  const a = 2, b = 2;
  expect(calculator.divide(a, b)).toBe(1);
});

it('calculator: multiply', () => {
  const a = 2, b = 2;
  expect(calculator.multiply(a, b)).toBe(4);
});

it('caesar cipher test 1', () => {
  const str = 'abcdefghijklmnopqrstuvwxyz';
  expect(caesarCipher(str)).toBe('bcdefghijklmnopqrstuvwxyza');
});

it('caesar cipher test 2', () => {
  const str = 'zebra stripes';
  expect(caesarCipher(str)).toBe('afcsb tusjqft');
});

it('analyze array 1', () => {
  const arr = [1,8,3,4,2,6];
  expect(analyzeArray(arr).average).toEqual(4);
});

it('analyze array 2', () => {
  const arr = [1,8,3,4,2,6];
  expect(analyzeArray(arr).min).toEqual(1);
});

it('analyze array 3', () => {
  const arr = [1,8,3,4,2,6];
  expect(analyzeArray(arr).max).toEqual(8);
});

it('analyze array 4', () => {
  const arr = [1,8,3,4,2,6];
  expect(analyzeArray(arr).length).toEqual(6);
});