var assert = require('assert');
var delve = require('.');

var obj = {
	undef: undefined,
	zero: 0,
	one: 1,
	n: null,
	f: false,
	a: {
		two: 2,
		b: {
			three: 3,
			c: {
				four: 4
			}
		}
	},
	foo: {
		"some property": 8
	},
	arr: [4, 3, [9, { bar: false, deep: [false, true] }, 7]]
};

// assert equality of a given path, as dot notation and array.
//optional third argument is for default when object is not found
function check(path, value, def) {

	var out = delve(obj, path, def);
	assert.strictEqual(out, value, 'delve(obj, "'+path+'") should be '+value+', got '+out);
	console.log(' ✓ delve(obj, "'+path+'"'+ (def ? ', "'+def+'"' : '') + ')');

	if (path) {
		var arr = path.replace(/\[("|')?([^\[\]]+)\1\]/g, '.$2').split(".");
		assert.strictEqual(delve(obj, arr, def), value);
		console.log(' ✓ delve(obj, ' + JSON.stringify(arr) + (def ? ', "'+def+'"' : '') + ')');
		console.log(' ✓ delve(obj, '+JSON.stringify(arr)+')');
	}
}

console.log("> No Defaults");
check('', undefined);
check('one', obj.one);
check('one.two', undefined);
check('a', obj.a);
check('a.two', obj.a.two);
check('a.b', obj.a.b);
check('a.b.three', obj.a.b.three);
check('a.b.c', obj.a.b.c);
check('a.b.c.four', obj.a.b.c.four);
check('n', obj.n);
check('n.badkey', undefined);
check('f', false);
check('f.badkey', undefined);
check('foo.some property', obj.foo["some property"]);
check('foo["some property"]', obj.foo["some property"]);
check('foo[\'some property\']', obj.foo["some property"]);
check('foo[some property]', obj.foo["some property"]);
check('arr[1]', obj.arr[1]);
check('arr[2][1].bar', obj.arr[2][1].bar);
check('arr[2][1].deep[1]', obj.arr[2][1].deep[1]);

//test defaults
console.log("\n> With Defaults");
check('', 'foo', 'foo');
check('undef', 'foo', 'foo');
check('n', null, 'foo');
check('n.badkey', 'foo', 'foo');
check('zero', 0, 'foo');
check('a.badkey', 'foo', 'foo');
check('a.badkey.anotherbadkey', 'foo', 'foo');
check('f', false, 'foo');
check('f.badkey', 'foo', 'foo');

//check undefined key throws an error
assert.throws(delve.bind(this, obj, undefined));
assert.throws(delve.bind(this, obj, undefined, 'foo'));

//check undefined obj doesn't throw errors and uses default
var backupObj = obj;
obj = undefined;
check('one', undefined);
check('one', 'foo', 'foo');
obj = backupObj;


console.log('✅ Success!');
process.exit(0);
