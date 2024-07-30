import path from 'path';
import parse from './parse.js';
import flatDiff from './flatDiff.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);

const genDiff = (filePath1, filePath2) => {
  const absolutePath1 = getAbsolutePath(filePath1);
  const absolutePath2 = getAbsolutePath(filePath2);

  const parsedFile1 = parse(absolutePath1);
  const parsedFile2 = parse(absolutePath2);

  return flatDiff(parsedFile1, parsedFile2);
};

export default genDiff;
