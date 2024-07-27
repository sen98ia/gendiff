import path from 'path';
import fs from 'fs';
import parse from './parse.js';
import flatDiff from './flatDiff.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getParsedFile = (fullPath) => parse(fs.readFileSync(fullPath));

const genDiff = (filepath1, filepath2) => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);

  const parsedFile1 = getParsedFile(fullPath1);
  const parsedFile2 = getParsedFile(fullPath2);

  return flatDiff(parsedFile1, parsedFile2);
};

export default genDiff;
