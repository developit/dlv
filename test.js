var assert = require('assert');
var dlv = require('.');

var obj = {
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

function check(path, value) {
	assert.equal(dlv(obj, path), value);
	console.log(' ✓ dlv(obj, "'+path+'")');
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

console.log('✅ Success!');
process.exit(0);
