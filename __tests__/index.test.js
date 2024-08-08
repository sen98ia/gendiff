import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const extentions = ['json', 'yaml', 'yml'];

test.each(extentions)('check formatters', (extention) => {
  const filePath1 = getFixturePath(`file1.${extention}`);
  const filePath2 = getFixturePath(`file2.${extention}`);
  const expectedStylish = readFile('expectedStylish.txt');
  const expectedPlain = readFile('expectedPlain.txt');
  const expectedJSON = readFile('expectedJson.json');

  expect(genDiff(filePath1, filePath2)).toBe(expectedStylish);
  expect(genDiff(filePath1, filePath2, 'plain')).toBe(expectedPlain);
  expect(genDiff(filePath1, filePath2, 'json')).toBe(expectedJSON);
});
