export const isIdentical = (arr1, arr2) => {
	const obj1Keys = Object.keys(arr1);
	const obj2Keys = Object.keys(arr2);

	if (obj1Keys.length == obj2Keys.length && obj1Keys === obj2Keys) {
		return true;
	}

	for (let i = 0; i < obj1Keys.length; i++) {
		if (!obj2Keys.includes(obj1Keys[i])) {
			return false;
		}
	}

	return false;
};