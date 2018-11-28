randoms
============

[![Build Status](https://secure.travis-ci.org/mpneuried/randoms.png?branch=master)](http://travis-ci.org/mpneuried/randoms)
[![Windows Tests](https://img.shields.io/appveyor/ci/mpneuried/randoms.svg?label=Windows%20Test)](https://ci.appveyor.com/project/mpneuried/randoms)
[![Dependency Status](https://david-dm.org/mpneuried/randoms.png)](https://david-dm.org/mpneuried/randoms)
[![NPM version](https://badge.fury.io/js/randoms.png)](http://badge.fury.io/js/randoms)

Generate random numbers, strings, arrays and objects

[![NPM](https://nodei.co/npm/randoms.png?downloads=true&stars=true)](https://nodei.co/npm/randoms/)

## Install

```
  npm install randoms
```

## Usage

```js
  import randoms from "randoms";
  import randomsString, { strUpper as randomsStringUpper } from "randoms/str";
  import randomsNumber from "randoms/num";
  import randomsArray, { arrayPick, num as randomArrayNum } from "randoms/array";
  import { strLower as randomObjectStringLower } from "randoms/object";
  
  randoms() // generate  random data. Could be a string, number, object or array
  randomsString( 15 ) // a random string of length 15
  randomsNumber( 0,10 ) // a random int between 0 to 10
  randomsStringUpper( 10 ) // a random uppercase string of length 10
  randomsArray() // a array with random data (number, string, array, object)
  arrayPick( [ 13, 23, 42, 666 ] ) // pick a random element aof the given array
  randomArrayNum( 13, 23, 42 ) // a array of 13 integers between 23,42
  randomObjectStringLower( 13, 666 ) // an object with 13 keys containing lowercase strings of length 666
```

## Methods

Currently the detailed readme is an open TODO.
See the [test script](https://github.com/mpneuried/randoms/blob/master/test/main.ts) for details and examples.

## Testing

The tests are based on the [mocha.js](https://mochajs.org/) framework with [should.js](https://shouldjs.github.io/) as assertaion lib.
To start the test just call

```
	npm test
```

or

```
	npm run test
```

## Release History
|Version|Date|Description|
|:--:|:--:|:--|
|1.0.1|2018-11-28|Optimized files published to npm|
|1.0.0|2018-11-28|Refactored code from coffeescript to typescript|
|0.0.3|2016-07-11|Added array.pick method|
|0.0.2|2016-06-23|Removed dependency|
|0.0.1|2016-06-23|Initial commit|

[![NPM](https://nodei.co/npm-dl/randoms.png?months=6)](https://nodei.co/npm/randoms/)

> Initially Generated with [generator-mpnodemodule](https://github.com/mpneuried/generator-mpnodemodule)

## The MIT License (MIT)

Copyright © 2016 M. Peter, http://www.tcs.de

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
