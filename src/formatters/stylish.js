import _ from 'lodash';

const states = {
  added: '+ ',
  removed: '- ',
  unchanged: '  ',
  nested: '  ',
  updated: ['- ', '+ '],
};

const defineValue = (value, depth) => {
  const spacesCount = 4;
  const indentSize = depth * spacesCount + spacesCount;
  const bracketIndent = indentSize - spacesCount;
  const blank = ' ';
  if (!_.isObject(value)) {
    return value;
  }
  const entries = Object.entries(value);
  const result = entries.map(([key, val]) => `${blank.repeat(indentSize)}${key}: ${defineValue(val, depth + 1)}`);
  return ['{', ...result, `${blank.repeat(bracketIndent)}}`].join('\n');
};

const stylish = (tree) => {
  const innerFunc = (node, depth) => {
    const spacesCount = 4;
    const leftIndent = 2;
    const indentSize = depth * spacesCount - leftIndent;
    const blank = ' ';
    const bracketIndent = indentSize + leftIndent;

    const {
      key, state, value, oldValue, newValue,
    } = node;

    if (node.state !== 'nested' && node.state !== 'updated') {
      return `${blank.repeat(indentSize)}${states[state]}${key}: ${defineValue(value, depth)}`;
    }
    if (node.state === 'updated') {
      return `${blank.repeat(indentSize)}${states[state][0]}${key}: ${defineValue(oldValue, depth)}\n${blank.repeat(indentSize)}${states[state][1]}${key}: ${defineValue(newValue, depth)}`;
    }
    if (node.state === 'nested') {
      return `${blank.repeat(indentSize)}${states[state]}${key}: {\n${node.value.map((el) => innerFunc(el, depth + 1)).join('\n')}\n${blank.repeat(bracketIndent)}}`;
    }
    throw new Error(`Invalid node state - ${state}`);
  };
  return `{\n${tree.map((el) => innerFunc(el, 1)).join('\n')}\n}`;
};

export default stylish;
