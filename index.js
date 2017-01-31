export default function dlv(obj, key, def) {
	if(!obj || !key) return def;
	if (key.split) key = key.split('.');
	var i=0, keyLength=key.length;
	for (; i<keyLength && obj.hasOwnProperty(key[i]); obj = obj[key[i++]]) ;
	return i===keyLength ? obj : def;
}
