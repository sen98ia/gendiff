// import _ from 'lodash';
// import diffTree from '../diffTree.js';
// import parse from '../parse.js';

const states = {
  added: '+ ',
  removed: '- ',
  unchanged: '  ',
  nested: '  ',
  updated: ['- ', '+ '],
};

const stylish = (tree) => {
  const innerFunc = (node, depth) => {
    const spacesCount = 4;
    const leftIndent = 2;
    const indentSize = depth * spacesCount - leftIndent;
    const blank = '.';

    const lines = [];

    if (node.state !== 'nested' && node.state !== 'updated') {
      lines.push(`${blank.repeat(indentSize)}${states[node.state]}${node.key}: ${node.value}`);
    }
    if (node.state === 'updated') {
      lines.push(`${blank.repeat(indentSize)}${states[node.state][0]}${node.key}: ${node.oldValue}\n${blank.repeat(indentSize)}${states[node.state][1]}${node.key}: ${node.newValue}`);
    }
    if (node.state === 'nested') {
      lines.push(`${blank.repeat(indentSize)}${states[node.state]}${node.key}: \n${node.value.map((el) => innerFunc(el, depth + 1)).join('\n')}`);
    }
    return lines;
  };
  return tree.flatMap((el) => innerFunc(el, 1)).join('\n');
};

export default stylish;
/*
console.log(stylish(diffTree(parse('__fixtures__/file1.json'), parse('__fixtures__/file2.json'))));
*/
