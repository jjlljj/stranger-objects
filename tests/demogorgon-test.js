var assert = require('chai').assert;
var Demagorgon = require('../lib/demogorgon.js');

describe('Demagorgon', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Demagorgon);
  });

  it.skip('should instantiate the evil critter, demagorgon', function () {
    var demagorgon = new Demagorgon();
    assert.isObject(demagorgon);
  });

  it.skip('should have a name', function () {
    var demagorgon = new Demagorgon('D’Artagnan');
    assert.equal(demagorgon.name, 'D’Artagnan')
  });
 

  it.skip('should start off as a slug', function () {
    var demagorgon = new Demagorgon('D’Artagnan');
    assert.equal(demagorgon.isSlug, true)
  });

  it.skip('should be able to roar', function () {
    var demagorgon = new Demagorgon('D’Artagnan');
    assert.equal(demagorgon.roar(), 'roarrr')
  })

  it.skip('should start off hungry', function () {
    var demagorgon = new Demagorgon('D’Artagnan');
    assert.equal(demagorgon.hungry, true)
  });

  it.skip('should be able to eat', function () {
    var demagorgon = new Demagorgon('D’Artagnan');
    assert.equal(demagorgon.hungry, true)
    assert.equal(demogorgon.eat(), 'yumm nougat and chocolate')
  });

  it.skip('should change into a demadog after eating three times', function () {
    var demagorgon = new Demagorgon('D’Artagnan');
    assert.equal(demagorgon.hungry, true)
    demogorgon.eat()
    demogorgon.eat()
    assert.equal(demagorgon.hungry, true)
    demogorgon.eat()
    assert.equal(demagorgon.hungry, true)
    assert.equal(demagorgon.isSlug, false)
    assert.equal(demagorgon.isDemadog, true)
  }};

  it.skip('should roar louder once it is a demadog', function () {
    var demagorgon = new Demagorgon('D’Artagnan');
    assert.equal(demagorgon.isSlug, true)
    demogorgon.eat()
    demogorgon.eat()
    demogorgon.eat()
    assert.equal(demagorgon.isDemadog, true)
    assert.equal(demagorgon.roar(), 'ROAAARRRRR')
  });

  


});