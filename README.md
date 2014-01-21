bar
===

** not yet functional **

Pretty, dependency-free bar charts.

## usage

```js
var Bar = require('bar'),
	element = document.querySelector('#el'),
	data = [
		{ id: 0, mean: 10, stddev: 1 },
		{ id: 1, mean: 12, stddev: .6 },
		{ id: 2, mean: 9, stddev: 1.2 },
		{ id: 3, mean: 14, stddev: 1.1 },
		{ id: 4, mean: 10, stddev: 1.1 },
		{ id: 5, mean: 11, stddev: .3 }
	];

	new Bar(element, data);
```

## options

- `Object propertyMap`