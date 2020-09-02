const assert = require('assert').strict;

// Unhoistable Declarations:
// - Lexical Declarations: Let and Const
// - Class Declaration

// Lexical Declarations: Let

(function () {
  let let1 = "hello"
  assert.strictEqual(let1, "hello")
})();

(function () {
  assert.throws(
    () => {
      let1;
      let let1 = "hello";
    },
    /Cannot access 'let1' before initialization/
  )
})();

// Lexical Declarations: Const

(function () {
  const const1 = "hello"
  assert.strictEqual(const1, "hello")
})();

(function () {
  assert.throws(
    () => {
      const1;
      const const1 = "hello";
    },
    /Cannot access 'const1' before initialization/
  )
})();

// Class Declarations: Let

(function () {
  class Say {
    static hello () { return "hello" }
  }
  assert.strictEqual(Say.hello(), "hello")
})();

(function () {
  assert.throws(
    () => {
      Say.hello()
      class Say {
        static hello () { return "hello" }
      }
    },
    /Cannot access 'Say' before initialization/
  )
})();



