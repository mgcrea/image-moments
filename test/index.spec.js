
import fs from 'fs';
import expect from 'expect';
import imageMoments from './../src';

expect.extend({
  toApproximate(expected, precision = 10e3) {
    expect.assert(
      Math.floor(this.actual * precision) === Math.floor(expected * precision),
      `expected %s to approximate ${expected}`,
      this.actual, expected
    );
    return this;
  }
});

describe('imageMoment', () => {
  // Fetch fixtures
  const sample = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/sample.json`));
  const implementation = 'opencv';
  const expected = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/moments/${implementation}.json`));
  const moments = imageMoments(sample);

  it('should properly compute raw moments', () => {
    expect(moments).toBeA('object');
    const rawMomentKeys = ['m00', 'm01', 'm10', 'm11', 'm02', 'm20', 'm12', 'm21', 'm03', 'm30'];
    rawMomentKeys.forEach(key => {
      if (expected[key]) {
        expect(moments[key]).toEqual(expected[key]);
      }
    });
  });

  it('should properly compute central moments', () => {
    expect(moments).toBeA('object');
    const k = Object.keys(expected); k.sort();
    const rawMomentKeys = ['mu00', 'mu01', 'mu10', 'mu11', 'mu20', 'mu02', 'mu21', 'mu12', 'mu30', 'mu03'];
    rawMomentKeys.forEach(key => {
      if (expected[key]) {
        expect(moments[key]).toApproximate(expected[key], 10e5);
      }
    });
  });

  it('should properly compute scale moments', () => {
    expect(moments).toBeA('object');
    const rawMomentKeys = ['nu11', 'nu12', 'nu21', 'nu20', 'nu03', 'nu30'];
    rawMomentKeys.forEach(key => {
      if (expected[key]) {
        expect(moments[key]).toApproximate(expected[key], 10e15);
      }
    });
  });
});
