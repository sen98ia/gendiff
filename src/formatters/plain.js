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
    const {
      key, state, value, oldValue, newValue,
    } = node;
    switch (node.state) {
      case 'added':
        return `Property '${key}' was ${state} with value: ${defineValue(value)}`;
      case 'updated':
        return `Property '${key}' was ${state}. From ${defineValue(oldValue)} to ${defineValue(newValue)}`;
      case 'unchanged':
        return [];
      case 'removed':
        return `Property '${key}' was ${state}`;
      case 'nested':
        return node.value.flatMap((el) => {
          const newEl = el;
          const ancestorName = node.key;
          newEl.key = `${ancestorName}.${newEl.key}`;
          return innerFunc(newEl);
        });
      default:
        throw new Error(`Invalid node state - ${state}`);
    }
  };
  return tree.flatMap(innerFunc).join('\n');
};

export default plain;
