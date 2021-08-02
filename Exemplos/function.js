

// arrow function
var sum = (a, b) => a + b;

console.log("Hello World");
console.log(sum(1,3));

//
var o = {
    sum, 
    multiplyBy5(a) {
        return a * 5;
    }
};

console.log(o.sum(3, 4));
console.log(o.multiplyBy5(2));


// rest & spread

var sumAll = (...values) => values.reduce((acc, value) => acc += value);
console.log(1, 2, 3);

var a = [1, 2, 3];
var b = [...a, 4, 5];
console.log(b);

// destructing

var [x, y, z, gamma] = a;
console.log(x, y, z, gamma);