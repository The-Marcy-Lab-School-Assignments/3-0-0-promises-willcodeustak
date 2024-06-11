//ShortCut
// const resolvedWrapper = (value) => {
// 	return Promise.resolve(value);
// };

//New Promise Way
const resolvedWrapper = (value) => {
	return new Promise((resolve, reject) => {
		resolve(value);
	});
	// return Promise.resolve(value);
};

const rejectedWrapper = (value) => {
	return new Promise((resolve, reject) => {});
};

const handleResolvedPromise = (promise) => {
	promise.then((value) => {
		console.log(value);
	});
	return promise;
};

//.then block

const handleResolvedOrRejectedPromise = (promise) => {
	return promise
		.then((value) => {
			console.log(value);
			return value;
		})
		.catch((error) => {
			//pass in a promise use a then block then apphend a catch block
			const errorMessage = `Your error message was: ${error.message}`;
			console.error(errorMessage);
			return null;
		});
};
//takes in miliseconds as an argument
const pauseForMs = (ms) => {
	// Return a new Promise
	return new Promise((resolve) => {
		// Inside the Promise block, this callback function will execute after `ms` milliseconds
		setTimeout(() => {
			// After the delay, log a message to indicate the delay duration
			console.log(`Delayed for ${ms} milliseconds.`);
			// Resolve the Promise to indicate that the delay is completed
			resolve();
		}, ms); // setTimeout will execute after `ms` milliseconds
	});
};

module.exports = {
	resolvedWrapper,
	rejectedWrapper,
	handleResolvedPromise,
	handleResolvedOrRejectedPromise,
	pauseForMs,
};
