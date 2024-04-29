function solution(array) {
  const getFrequencyMap = (array) => {
    const frequencyMap = new Map();
    array.forEach((key) => {
      const currentValue = frequencyMap.get(key);
      if (currentValue) {
        frequencyMap.set(key, currentValue + 1);
      } else {
        frequencyMap.set(key, 1);
      }
    });
    return frequencyMap;
  };
  const getModeValues = (frequencyMap) => {
    const frequencyArray = Array.from(frequencyMap);
    frequencyArray.sort((a, b) => b[1] - a[1]);
    const maxFrequency = frequencyArray[0][1];
    return frequencyArray.reduce(
      (acc, [value, frequency]) =>
        frequency === maxFrequency ? acc.concat(value) : acc,
      []
    );
  };
  const frequencyMap = getFrequencyMap(array);
  const modeValues = getModeValues(frequencyMap);

  return modeValues.length === 1 ? modeValues[0] : -1;
}
