/// <reference types="mocha"/>
import assert from 'assert';
import app from '../../src/app';

describe('\'secondTest\' service', () => {
  it('registered the service', () => {
    const service = app.service('second-test');

    assert.ok(service, 'Registered the service');
  });
});
