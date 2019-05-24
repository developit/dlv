export default function dlv(obj, key, def, p, undef) {
	key = key.split ? key.split('.') : key;
	while (key.length) {
		p = key.shift();
		obj = obj ? obj[p] : undef;
	}
	return obj === undef ? def : obj;
}
