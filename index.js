export default function dlv(obj, key, def) {
	return (obj = (key.split ? key.split('.') : key).reduce(function (obj, k) {
  	return obj && obj[k]
	}, obj)) === undefined ? def : obj;
}