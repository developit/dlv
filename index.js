export default function dlv(obj, key, def, undef) {
	key = key.split ? key.split('.') : key;
	obj = key.reduce(function(obj, p) {
		return obj ? obj[p] : undef;
	}, obj);
	return obj === undef ? def : obj;
}
