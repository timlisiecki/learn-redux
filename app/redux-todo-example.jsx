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
	switch (action.type) {
		case "CHANGE_SEARCH_TEXT":
			return {
				...state,
				searchText: action.searchText
			}
		default:
			return state;
	}
};
var store = redux.createStore(reducer);

console.log("currentState", store.getState());

store.dispatch({
	type: "CHANGE_SEARCH_TEXT",
	searchText: "work"
});
console.log("searchText should be work", store.getState());
