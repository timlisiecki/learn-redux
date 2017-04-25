var redux = require("redux");

console.log("Starting redux example");

// Reducer
var reducer = (state = {name: "Anonymous"}, action) => {
	// state = state || {name: "Anonymous"}; >>>> this is shortened in above argument using ES6

	console.log("New action", action);
	switch (action.type) {
		case "CHANGE_NAME":
			return {
				...state,
				name: action.name
			};
		default:
			return state;
	}
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log("currentState", currentState);

store.dispatch({
	type: "CHANGE_NAME",
	name: "Tim"
});
console.log("Name should be Tim", store.getState());