console.log('1' - - '1');
 console.log(typeof NaN);
 console.log(typeof null);
 console.log(1 + 2 + '3');
 function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}
console.log(foo());
var num = 8;
function multiply() {
  num = num * 2;
}
multiply();
console.log(num);
console.log(typeof typeof 1);
var x = 1;
function foo() {
  x = 10;
  return;
  function x() {}
}
foo();
console.log(x);
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
let a = 0;
let b = false;
console.log((a == b) + (a === b));
// function foo(n) {
//   if (n <= 1) return;
//   foo(n - 2);
// }
// console.log(foo(6));
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();
var x = { foo : 1 };
var output = (function() {
    delete x.foo;
    return x.foo;
})();
console.log(output);