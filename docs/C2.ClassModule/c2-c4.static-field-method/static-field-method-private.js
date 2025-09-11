class Example {
  static #secret = "hidden";

  static getSecret() {
    return Example.#secret;
  }
}

console.log(Example.getSecret()); // Outputs: 'hidden'
