# Image Moments

[![project status](https://img.shields.io/badge/status-stable-green.svg?style=flat)](https://github.com/mgcrea/image-moments) [![license](https://img.shields.io/github/license/mgcrea/image-moments.svg?style=flat)](https://tldrlegal.com/license/mit-license) [![build status](http://img.shields.io/travis/mgcrea/image-moments/master.svg?style=flat)](http://travis-ci.org/mgcrea/image-moments) [![dependencies status](https://img.shields.io/david/mgcrea/image-moments.svg?style=flat)](https://david-dm.org/mgcrea/image-moments) [![devDependencies status](https://img.shields.io/david/dev/mgcrea/image-moments.svg?style=flat)](https://david-dm.org/mgcrea/image-moments#info=devDependencies) [![coverage status](http://img.shields.io/codeclimate/coverage/github/mgcrea/image-moments.svg?style=flat)](https://codeclimate.com/github/mgcrea/image-moments) [![climate status](https://img.shields.io/codeclimate/github/mgcrea/image-moments.svg?style=flat)](https://codeclimate.com/github/mgcrea/image-moments)

Calculate [Image Moments](https://en.wikipedia.org/wiki/Image_moment) with Javascript!

## Usage

### Quickstart

1. Fetch raw, central, scale and rotation invariant moments

    ```js
    import imageMoments from 'image-moments';
    // Sample greyscale matrix of 4x3, 255 = white, 0 = black
    const matrix = [[255, 255, 255, 255], [0, 255, 255, 255], [255, 0, 255, 255]];
    const moments = imageMoments(matrix);
    ```

### Output

```js
{
  // Raw moments
  "m00": 126735,
  "m01": 1524390,
  "m10": 1207170,
  "m11": 14488335,
  "m02": 24932370,
  "m20": 15700860,
  "m12": 236865675,
  "m21": 188417205,
  "m03": 458373210,
  "m30": 229570380,
  // Centroid
  "mx": 12.028169014084508,
  "my": 9.525150905432596,
  // Translational invariant moments
  "mu00": 126735,
  "mu11": -31709.78873239441,
  "mu20": 4202383.581488935,
  "mu02": 6596749.436619717,
  "mu21": 168688.29923201213,
  "mu12": 143909.71646781557,
  "mu30": -39356.39745921243,
  "mu03": -211184.61614761315,
  // Scale invariant moments
  "nu11": -0.0000019742411969914966,
  "nu12": 2.5167999382131884e-8,
  "nu21": 2.9501461854340094e-8,
  "nu02": 0.0004107114876706931,
  "nu20": 0.0002616390434560192,
  "nu03": -3.693353318438072e-8,
  "nu30": -6.8829389095344285e-9,
  // Rotation invariant moments
  "hu1": 0.0006723505311267123,
  "hu2": 4.5207082721958777e-7,
  "hu3": 2.2522278857137367e-14,
  "hu4": 4.747952002281406e-15,
  "hu5": -1.1376366926279648e-30,
  "hu6": -4.053410989495849e-20,
  "hu7": -1.9354880656758928e-31,
  "hu8": -2.0809356074964827e-20
}
```

### Properties

- `{mx, my}` is the centroid on which it would balance when placed on a needle
- `mu*` moments are translational invariant.
- `nu*` moments are translational and scale invariant.
- `hu*` moments are translational, scale and rotation invariant.

### Available scripts

| **Script** | **Description** |
|----------|-------|
| start | Alias of test:watch |
| test | Run mocha unit tests |
| test:watch | Run and watch mocha unit tests |
| lint | Run eslint static tests |
| compile | Compile the library |
| compile:watch | Compile and watch the library |


## Authors

**Olivier Louvignes**

+ http://olouv.com
+ http://github.com/mgcrea

Inspired by [OpenCV](https://github.com/Itseez/opencv/blob/master/modules/imgproc/src/moments.cpp).

## License

```
The MIT License

Copyright (c) 2016 Olivier Louvignes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
