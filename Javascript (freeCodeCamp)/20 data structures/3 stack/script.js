const initStack = () => {
  return {
    collection: []
  }
}

const isEmpty = (stack) => {
  return stack.collection.length === 0
}

const push = (stack, ele) => {
  stack.collection.push(ele)
}

const pop = (stack) => {
  if (isEmpty(stack)) return undefined;
  return stack.collection.pop()
}

const peek = (stack) => {
  if (isEmpty(stack)) return undefined;
  return stack.collection[stack.collection.length-1]
}

const clear = (stack) => {
  stack.collection = []
}