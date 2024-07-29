import { test, expect } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

// проверяю тесты в лоб

test('gendiff', () => {
  const expectedResult = fs.readFileSync('./__fixtures__/expectedResult.txt', 'utf-8');
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(expectedResult);
});
