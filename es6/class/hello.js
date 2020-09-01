class Hello {

  // Private static are available only where they were defined
  static #HELLO_SUFFIX = "!!!"

  static sanitize(name = "") {
    // Static references static with `this`
    return `${name.trim()}${this.#HELLO_SUFFIX}`
  }

  names = [];
  // Private field
  #nameChanges = 0;

  constructor(name = 'Stranger') {
    // Constructur and instance methods reference static with `Hello` or
    // `this.constructor` but 2nd options VSC autocompletion doesn't work.

    // If Another extends Hello, it references Hello static with `super`.

    console.log(`Hello suffix is: ${Hello.#HELLO_SUFFIX}`)
    // console.log(`Hello suffix is: ${this.constructor.#HELLO_SUFFIX}`)

    this.names.push(name)
  }

  get name() {
    return Hello.sanitize(this.names[this.names.length-1])
  }

  set name(name) {
    this.names.push(name)
    this.#nameChanges++
    console.log(`Name changed to: ${name}`)
  }

  sayIt() {
    console.log(`Hello ${this.name}`)
    console.log(`You have changed the name ${this.#nameChanges} times.`)
  }
}

const hello = new Hello()
hello.sayIt()
hello.name = "Foo"
hello.sayIt()
