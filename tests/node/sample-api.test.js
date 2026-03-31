const assert = require('assert');
const { buildResponse } = require('../../examples/node/sample-api');

function testHealth() {
  const result = buildResponse('/health');
  assert.equal(result.status, 200);
}

function testNotFound() {
  const result = buildResponse('/missing');
  assert.equal(result.status, 404);
}

testHealth();
testNotFound();
console.log('sample-api tests passed');
