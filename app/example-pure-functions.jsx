var redux = require("redux");

console.log("Starting redux example");


// Pure Function -> 
	// - always going to return the same output given the same input(s), 
	// - does not rely on variables outside of itself, 
	// - and it cannot perform asyncronous requests (no promises or callbacks)

function add(a, b) {
	return a + b;
}

	// NOT pure functions
	var a = 3;
	function(b) {
		return a + b;
	}

	var result;
	function add(a, b) {
		result = a + b;
		return result;
	}

	function add(a, b) {
		return a + b + new Date().getSeconds();
	}

	function changeProp(obj) {

	}
	var res = changeProp({
		name: "Tim"
	});
	console.log(res);