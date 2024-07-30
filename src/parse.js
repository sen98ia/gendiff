import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const readFile = (filePath) => fs.readFileSync(filePath);
const getFormat = (filePath) => path.extname(filePath);

const parse = (filePath) => {
  const format = getFormat(filePath);
  const data = readFile(filePath);
  if (format === '.json') {
    return JSON.parse(data);
  }
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(data);
  }
  throw new Error(`Invalid format - ${format}`);
};

export default parse;
