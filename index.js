export default function dlv(obj, key, def, p) {
	p = 0;
	key = key.split ? key.split(/\W+/) : key;
	while (obj && p<key.length) obj = obj[key[p++]];
	return (obj===undefined || p<key.length) ? def : obj;
}
