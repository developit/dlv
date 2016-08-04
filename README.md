# `dlv(obj, keypath)` [![NPM](https://img.shields.io/npm/v/dlv.svg)](https://npmjs.com/package/dlv) [![Build](https://travis-ci.org/developit/dlv.svg?branch=master)](https://travis-ci.org/developit/dlv)

> Safely get a dot-notated path within a nested object.

### Why?

Smallest possible implementation: only **120 bytes.**

You could write this yourself, but then you'd have to write [tests].

Implementation is ripped directly from [preact].

Supports ES Modules, CommonJS and globals.

### Installation

`npm install --save dlv`


### Usage

```js
import delve from 'dlv';

let obj = {
	a: {
		b: {
			c: 1
		}
	}
};

delve(obj, 'a.b.c') === 1;

delve(obj, 'a.b') === obj.a.b;

delve(obj, 'a.b.c.d') === undefined;
```

### License

MIT


[preact]: https://github.com/developit/preact
[tests]: https://github.com/developit/dlv/blob/master/test.js
