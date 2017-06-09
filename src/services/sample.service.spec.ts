import SampleService from './sample.service';
import assert = require('assert');

describe('SampleService', () => {
  it('should have a title called Sample', () => {
    const sampleService = new SampleService();
    assert.equal(sampleService.title, 'Sample');
  });
});
