function add(a, b) {
  let cache = {};
  return function (a, b) {
    let key = `${a}, ${b}`;
    if (key in cache) {
      return cache[key];
    } else {
      let result = a + b;
      cache[key] = result;
      return result;
    }
  };
}

const memoize = add();
console.log(memoize(2, 3));
console.log(memoize(2, 3));
