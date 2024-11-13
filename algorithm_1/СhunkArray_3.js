function chunkArray(array, size) {
  const currentArr = [];
  while (array.length > 0) {
    currentArr.push(array.splice(0, size));
  }
  console.log(currentArr);
  return currentArr;
}

chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2); // [[1, 2], [3, 4], [5, 6],[7, 8]]
chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6],[7, 8]]
