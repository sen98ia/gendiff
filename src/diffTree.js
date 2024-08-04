import _ from 'lodash';

const diffTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);

  const keys = [...new Set([...keys1, ...keys2])];
  const sortedKeys = _.orderBy(keys);

  const result = sortedKeys.map((key) => {
    const element = {};
    if (!Object.hasOwn(data2, key)) {
      element.key = key;
      element.state = 'removed';
      element.value = data1[key];
    } else if (!Object.hasOwn(data1, key)) {
      element.key = key;
      element.state = 'added';
      element.value = data2[key];
    } else if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      element.key = key;
      element.state = 'nested';
      element.value = diffTree(data1[key], data2[key]);
    } else if (data1[key] !== data2[key]) {
      element.key = key;
      element.state = 'updated';
      element.oldValue = data1[key];
      element.newValue = data2[key];
    } else {
      element.key = key;
      element.state = 'unchanged';
      element.value = data1[key];
    }
    return element;
  });

  return result;
};

export default diffTree;
