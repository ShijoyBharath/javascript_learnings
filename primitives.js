console.log("script running....");

// swap variables
let n1 = 1,
  n2 = 2;
[n1, n2] = [n2, n1];
console.log(n1, n2);

// function to check if number is an integer without using built in functions

function isInt(num) {
  return num % 1 === 0;
}
console.log(
  isInt(4.0), // true
  isInt(12.2), // false
  isInt(0.3) // false
);

// fn which returns random number inthe given range, both values inclusive

function generateRandom(start, end) {
  return Math.round(Math.random() * (end - start + 1)) + start;
}
console.log(generateRandom(1, 23));

// reverse string

function reverseString(str) {
  //   let rev = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     rev += str.charAt(i);
  //     // rev += str[i];
  //   }
  //   return rev;
  console.log(str.split("").reverse());
  return str.split("").reverse().join("");
}

console.log(reverseString("reverse"));

// reverse integer
function reverseInt(num) {
  let rev = 0;
  while (num != 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reverseInt(2934));

let replace_space_string = "hello there man";
console.log(replace_space_string.split(" ").join("_"));
console.log(replace_space_string.replaceAll(" ", "_"));

// function to get distance between first and last X
function getTheGapX(str) {
  let l = 0;
  let r = str.length;

  while (str.charAt(l) != "X" && l < str.length) {
    l++;
  }
  while (str.charAt(r) != "X" && r > 0) {
    r--;
  }
  if (l < r) {
    return r - l;
  } else {
    return -1;
  }
}

// Example
console.log(getTheGapX("XeroX")); // 4
console.log(getTheGapX("Xamarin")); // -1       (If there is only single character 'X')
console.log(getTheGapX("JavaScript")); // -1       (If there is no character 'X')
console.log(getTheGapX("F(X) !== G(X) !== F(X)")); // 18

// function to truncate a string to certain number of letters
function truncate(str, len) {
  if (str.length < len) {
    return str;
  } else {
    return str.substr(0, len - 3) + "...";
  }
}
console.log(truncate("javascript", 7));
