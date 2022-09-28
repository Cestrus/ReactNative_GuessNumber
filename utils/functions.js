export const isCorrectValue = (value) => {
	const valToNumber = parseInt(value);
	if (isNaN(valToNumber) || valToNumber <= 0 || valToNumber > 99) {
		return false;
	}
	return true;
};

export const getRandomBetween = (min, max, exclude) => {
	const rndValue = Math.floor(Math.random() * (max - min)) + min;
	if (rndValue === exclude) {
		return getRandomBetween(min, max, exclude);
	} else {
		return rndValue;
	}
};
