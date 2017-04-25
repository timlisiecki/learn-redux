var redux = require("redux");

console.log("Starting redux example");

// Reducer
var reducer = (state = {name: "Anonymous"}, action) => {
	// state = state || {name: "Anonymous"}; >>>> this is shortened in above argument using ES6
	return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log("currentState", currentState);