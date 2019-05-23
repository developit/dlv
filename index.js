export default function dlv(obj, key, def, p, undef) {
	key = key.split ? key.split('.') : key;
	for (p = 0; p < key.length; p++) {
		obj = obj ? obj[key[p]] : undef;
		if(obj === undef) return def;
	}
	return obj === undef ? def : obj;
}
