
/**
 * Dependencies
 */
var assert = require('assert');
var Retsly = require('retsly-backbone');
var Tour = require('retsly-virtualtour');

/**
 * Tests
 */

suite('VirtualTour')
test('is an object property', function() {
  assert('object' == typeof Tour, 'is an object')
});

suite('VirtualTour.Basic');
test('is a component function', function() {
  assert('function' == typeof Tour.Basic, 'has a component')
});

test('cannot be instantiated without Retsly.create()', function() {
  assert.throws(function() {
    new Tour.Basic({ client_id: 'xxx', vendorID: 'sandicor', listingID: 'xxx', target: { $el: '' } });
  }, Error);
});

test('can be instantiated after Retsly.create()', function(){
  assert.doesNotThrow(function() {
    Retsly.create('xxx','xxx');
    new Tour.Basic({ client_id: 'xxx', vendorID: 'sandicor', listingID: 'xxx', target: { $el: '' } });
  })
});

