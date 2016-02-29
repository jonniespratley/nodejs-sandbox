import MySuperClass from './my-super-class.js';

/**
 * This is MyClass description.
 */
export default class MyClass extends MySuperClass {
  /**
   * This is MyClass constructor description.
   * @param {string} [name="anonymous"] - this is name description.
   */
  constructor(name = 'anonymous') {
    super();
    this._name = name;
  }

  /**
   * This is sayMyName description
   * @returns {string} this is return description.
   */
  sayMyName() {
    return `My name is ${this._name}`;
  }
}
