function addTogether(a, b) {
  if (typeof a !== "number") return undefined;

  if (arguments.length === 1) {
    return function (b) {
      if (typeof b !== "number") return undefined;
      return a + b;
    };
  }

  if (typeof b !== "number") return undefined;

  return a + b;
}