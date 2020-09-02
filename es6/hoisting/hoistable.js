const assert = require('assert').strict;

// Hoistable Declarations:
// - Variable Statements (but not the assignment!)
// - Function Declarations
// - Generator Declarations

// Variable Statements

(function () {
  var var1 = "hello"
  assert.strictEqual(var1, "hello")
})();

(function () {
  assert.strictEqual(var1, undefined)
  var var1 = "hello"
})();

// Function Declarations

(function () {
  function fun () { return "hello"; }
  assert.strictEqual(fun(), "hello")
})();

(function () {
  assert.strictEqual(fun(), "hello")
  function fun () { return "hello"; }
})();

// Generator Declarations

(function () {
  function* gen () { yield "hello"; }
  assert.strictEqual(gen().next().value, "hello")
})();

(function () {
  assert.strictEqual(gen().next().value, "hello")
  function* gen () { return "hello"; }
})();
