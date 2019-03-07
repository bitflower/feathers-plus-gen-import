/// <reference types="mocha"/>
import assert from 'assert';
import app from '../../src/app';

describe('\'repo\' service', () => {
  it('registered the service', () => {
    const service = app.service('repo');

    assert.ok(service, 'Registered the service');
  });
});
