var assert = require('assert');
var delve = require('.');

var obj = {
	undef: undefined,
	zero: 0,
	one: 1,
	a: {
		two: 2,
		b: {
			three: 3,
			c: {
				four: 4
			}
		}
	}
};

// assert equality of a given path, as dot notation and array.
//optional third argument is for default when object is not found
function check(path, value, def) {

	assert.equal(delve(obj, path, def), value);
	console.log(' ✓ delve(obj, "'+path+'")');

	if(path) {
		var arr = path.split('.');
		assert.equal(delve(obj, arr, def), value);
		console.log(' ✓ delve(obj, '+JSON.stringify(arr)+')');
	}
}

check('', undefined);
check('one', obj.one);
check('one.two', undefined);
check('a', obj.a);
check('a.two', obj.a.two);
check('a.b', obj.a.b);
check('a.b.three', obj.a.b.three);
check('a.b.c', obj.a.b.c);
check('a.b.c.four', obj.a.b.c.four);

//test defaults
check('', 'foo', 'foo');
check('undef', undefined, 'foo');
check('zero', 0, 'foo');
check('a.badkey', 'foo', 'foo');
check('a.badkey.anotherbadkey', 'foo', 'foo');

//check undefined key doesn't throw errors and uses default
check(undefined, undefined);
check(undefined, 'foo', 'foo');

//check undefined obj doesn't throw errors and uses default
var backupObj = obj;
obj = undefined;
check('one', undefined);
check('one', 'foo', 'foo');
obj = backupObj;


console.log('✅ Success!');
process.exit(0);
