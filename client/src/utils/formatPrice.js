export default (number) => {
	let str = number.toString();
	if (str.length > 3) {
		str = str.substr(0, str.length - 3) + ',' + str.substr(str.length - 3, 3);
	}
	return '$ ' + str
}
