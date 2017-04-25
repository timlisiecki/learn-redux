var redux = require("redux");

console.log("Starting redux todo example");

// Reducer
var stateDefault = {
	searchText: "",
	showCompleted: false,
	todos: []
};
var reducer = (state = stateDefault, action) => {
	// state = state || {name: "Anonymous"}; >>>> this is shortened in above argument using ES6
	return state;
};
var store = redux.createStore(reducer);

console.log("currentState", store.getState());

