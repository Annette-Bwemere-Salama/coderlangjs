export const isIdentical = (obj1, obj2) => {
	let ob1 = JSON.stringify(obj1);
	let ob2 = JSON.stringify(obj2);
		if (ob1 === ob2) {
			return true
		}
		return false
	
};