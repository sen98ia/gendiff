import path from 'path';
import parse from './parse.js';
import diffTree from './diffTree.js';
// import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);

const genDiff = (filePath1, filePath2, formatter = plain) => {
  const absolutePath1 = getAbsolutePath(filePath1);
  const absolutePath2 = getAbsolutePath(filePath2);

  const parsedFile1 = parse(absolutePath1);
  const parsedFile2 = parse(absolutePath2);

  const differenceTree = diffTree(parsedFile1, parsedFile2);
  return formatter(differenceTree);
};

export default genDiff;
