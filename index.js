export default function dlv(obj, key, def, p, undef) {
	key = key.split ? key.split('.') : key;
	for (p in key) {
		obj = obj ? obj[key[p]] : undef;
	}
	return obj === undef ? def : obj;
}
