import assert from 'assert';
import MyClass from '../src/my-class.js';
/** @test {MyClass} */
describe('MyClass is super useful class.', () => {

  /** @test {MyClass#sayMyName} */
  it('say my name', () => {
    let foo = new MyClass('Alice');
    assert.equal(foo.sayMyName(), 'My name is Alice');
  })
});
