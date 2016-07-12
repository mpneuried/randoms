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
  var randoms = require( "randoms" );
  
  randoms.string( 15 ) // a random string of length 15
  randoms.number( 0,10 ) // a random int between 0 to 10
  randoms.string.upper( 10 ) // a random uppercase string of length 10
  randoms.array() // a array with random data (number, string, array, object)
  randoms.array.pick( [ 13, 23, 42, 666 ] ) // pick a random element aof the given array
  randoms.array.number( 13, 23, 42 ) // a array of 13 integers between 23,42
  randoms.obj.string.lower( 13, 666 ) // an object with 13 keys containing lowercase strings of length 666
```

## Methods

Currently the detailed readme is an open TODO.
See the [source code](https://github.com/mpneuried/randoms/blob/master/_src/lib/main.coffee) or the [test script](https://github.com/mpneuried/randoms/blob/master/_src/test/main.coffee) for details.

## Testing

The tests are based on the [mocha.js](https://mochajs.org/) framework with [should.js](https://shouldjs.github.io/) as assertaion lib.
To start the test just call

```
	npm test
```

or

```
	grunt test
```

If you want to be more precice use the mocha cli

```
	mocha -R nyan -t 1337 test/main.js
```

### Docker-Tests

If you want to test your module against multiple node versions you can use the docker tests.

**Preparation**

```sh
	# make sure you installed all dependencies
	npm install
	# build the files
	grunt build
```

**Run**

To run the tests through the defined versions run the following command:

```
	dockertests/run.sh
```



## Release History
|Version|Date|Description|
|:--:|:--:|:--|
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
