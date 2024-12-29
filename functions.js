console.log("functions running ...");

// calc interface
function Calculator(a, b) {
  function sum() {
    return a + b;
  }

  function sub() {
    return a - b;
  }

  return { sum, sub };
}

const calc = Calculator(1, 2);
console.log(calc.sum(), calc.sub());

// private counter
function privateCounter() {
  var count = 0;

  //   function increment(val = 1) {
  //     return (count += val);
  //   }

  //   function retrieve() {
  //     return count;
  //   }

  //   return {
  //     increment,
  //     retrieve,
  //   };

  return {
    increment: function (val = 1) {
      return (count += val);
    },
    retrieve: function () {
      return count;
    },
  };
}

const counter = privateCounter();

console.log(counter.increment(), counter.increment(4), counter.retrieve());

// multiply
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(2)(5));

// function to convert another function into curry function

function curryFunc(fn) {
  return function curry(...args) {
    if (args.length < fn.length) {
      return curry.bind(this, ...args);
    }
    return fn.apply(this, args);
  };
}

// driver code
let sum = curryFunc(function (a, b, c, d) {
  return a + b + c + d;
});

console.log(sum(1)(2)(3)(4), sum(1, 2)(3, 4));
// called like curried function // called like partial application

// debounce function
function debounce(func, wait) {
  let timer;

  return function () {
    if (timer) clearTimeout(timer);

    timer = setTimeout(func, wait);
  };
}
