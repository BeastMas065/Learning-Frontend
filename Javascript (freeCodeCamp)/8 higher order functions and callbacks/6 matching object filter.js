function whatIsInAName(collection, source) {
  return collection.filter(obj =>
    Object.keys(source).every(key => obj[key] === source[key])
  );
}