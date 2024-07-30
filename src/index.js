import path from 'path';
import fs from 'fs';
import parse from './parse.js';
import flatDiff from './flatDiff.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(filePath);
const getParsedFile = (filePath) => parse(readFile(filePath));

const genDiff = (filePath1, filePath2) => {
  const absolutePath1 = getAbsolutePath(filePath1);
  const absolutePath2 = getAbsolutePath(filePath2);

  const parsedFile1 = getParsedFile(absolutePath1);
  const parsedFile2 = getParsedFile(absolutePath2);

  return flatDiff(parsedFile1, parsedFile2);
};

export default genDiff;
