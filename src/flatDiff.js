import _ from 'lodash';

const flatDiff = (data1, data2) => {
  const entries1 = Object.entries(data1);
  const entries2 = Object.entries(data2);

  const sortedEntries = _.orderBy([...entries1, ...entries2], [(el) => el[0]]);

  const lines = sortedEntries.map((entry) => {
    const [key, value] = entry;
    if (!Object.hasOwn(data1, key)) {
      return `+ ${key}: ${value}`;
    }
    if (!Object.hasOwn(data2, key)) {
      return `- ${key}: ${value}`;
    }
    if (data1[key] === value && data2[key] !== value) {
      return `- ${key}: ${value}`;
    }
    if (data1[key] !== value && data2[key] === value) {
      return `+ ${key}: ${value}`;
    }
    return `  ${key}: ${value}`;
  });

  const resultLines = [...new Set([...lines])];

  return ['{', ...resultLines, '}'].join('\n');
};

export default flatDiff;
