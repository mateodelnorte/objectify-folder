var of = require('../');

var should = require('should');

describe('objectify-folder', function () {
  it('should objectify top level dir', function () {
    of('./support').should.have.property('one', 1);
  });
  it('should objectify multiple files', function () {
    of('./support/dir').should.have.property('two', { '2': 2 });
  });
  it('should glob', function () {
    of('./support/**/*').should.have.property('two', { '2': 2 });
    of('./support/**/*').should.have.property('three');
    var fn = of('./support/**/*').three;
    should(fn).has.property('name', 'three');
    should(fn()).eql(3);
  });
});