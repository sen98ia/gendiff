#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

export default program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const formatter = program.opts().format;
    console.log(genDiff(filepath1, filepath2, formatter));
  });

program.parse(process.argv);
