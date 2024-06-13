const crypto = require('crypto');
/** FEEDBACK: Again, absolutely loving the comments! You are killing it! */
const numsToRGBColor = ([color1, color2, color3]) => {
	return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () =>
	new Promise((resolve, reject) => {
		crypto.randomFill(new Uint8Array(3), (err, buffer) => {
			if (err) return reject(err);
			resolve([...buffer]);
		});
	});

const return4RandomColors = () => {
	const colors = [];
	// Chain promises to generate random colors
	return getRandomBytes()
		.then((buffer1) => {
			colors.push(numsToRGBColor(buffer1)); //Convert buffer to RGB color and push to colors array
			return getRandomBytes(); //grabbing another set of random bytes
		})
		.then((buffer2) => {
			colors.push(numsToRGBColor(buffer2));
			return getRandomBytes();
		})
		.then((buffer3) => {
			colors.push(numsToRGBColor(buffer3));
			return getRandomBytes();
		})
		.then((buffer4) => {
			colors.push(numsToRGBColor(buffer4));
			return colors; //Return the array of colors
		})
		.catch((err) => {
			console.error(err);
			return []; //Return an empty array in case of error
		});
};
//return4RandomColors function. use the resolved values from getRandomBytes to generate colors.
//call numsToRGBColor.

return4RandomColors().then(console.log);

module.exports = {
	numsToRGBColor,
	getRandomBytes,
	return4RandomColors,
};

/*
first attempt : non working code. Used crypto by mistake... ?
	const colors = [];
	return getRandomBytes()
		.then((resolve) => {
			crypto.randomFill;
			console.log(1);
			return resolve;
		})
		.then((resolve) => {
			crypto.randomFill;
			console.log(2);
			return resolve;
		})
		.then((resolve) => {
			crypto.randomFill;
			console.log(3);
			return resolve;
		})
		.then((resolve) => {
			crypto.randomFill;
			console.log(4);
			return resolve;
		})
		.catch((err) => {
			console.error(err);
		});

 };
*/
