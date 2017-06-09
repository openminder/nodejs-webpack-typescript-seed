import PetService from './pet.service';
import assert = require('assert');

describe('SampleService', () => {
  it('should have a title called Sample', () => {
    const sampleService = new PetService();
    assert.equal(sampleService.title, 'Sample');
  });
});
