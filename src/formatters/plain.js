import _ from 'lodash';

const defineValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const innerFunc = (node) => {
    if (node.state === 'unchanged') return [];

    const line = [`Property '${node.key}' was ${node.state}`];
    switch (node.state) {
      case 'added':
        line.push(` with value: ${defineValue(node.value)}`);
        break;
      case 'updated':
        line.push(`. From ${defineValue(node.oldValue)} to ${defineValue(node.newValue)}`);
        break;
      case 'nested':
        return node.value.flatMap((el) => {
          const newEl = el;
          const ancestorName = node.key;
          newEl.key = `${ancestorName}.${newEl.key}`;
          return innerFunc(newEl);
        });
      default: break;
    }
    return line.join('');
  };
  return tree.flatMap(innerFunc).join('\n');
};

export default plain;
