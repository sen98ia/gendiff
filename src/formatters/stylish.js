// import _ from 'lodash';
import diffTree from '../diffTree.js';
import parse from '../parse.js';

const stylish = (tree) => {
  const inner = (node) => {
    if (node.state !== 'nested') {
      return [node.state, node.key, node.value].join(' ');
    }
    return inner(node.value);
  };
  return tree.map((el) => inner(el));
};

export default stylish;

console.log(stylish(diffTree(parse('__fixtures__/file1.json'), parse('__fixtures__/file2.json'))));
