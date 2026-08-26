const chunkArrayInGroups = (arr, d) => {
  const chunks = [];

  let i = 0;
  let chunk = [];

  while (i < arr.length) {
    chunk.push(arr[i]);
    i++;

    if (chunk.length === d) {
      chunks.push(chunk);
      chunk = [];
    }
  }

  if (chunk.length > 0) {
    chunks.push(chunk);
  }

  return chunks;
};