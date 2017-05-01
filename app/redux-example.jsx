var redux = require("redux");

console.log("Starting redux example");

// Reducer
var stateDefault = {
	name: "Anonymous",
	hobbies: [],
	movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
	// state = state || {name: "Anonymous"}; >>>> this is shortened in above argument using ES6

	switch (action.type) {
		case "CHANGE_NAME":
			return {
				...state,
				name: action.name
			};
		case "ADD_HOBBY":
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}
				]
			};
		case "REMOVE_HOBBY":
			return {
				...state,
				hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
			};
		case "ADD_MOVIE":
			return {
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieId++,
						title: action.title,
						genre: action.genre
					}
				]
			};
		case "REMOVE_MOVIE":
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id !== action.id)
			};
		default:
			return state;
	}
};
var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log("Name is", state.name);
	document.getElementById("app").innerHTML = state.name;

	console.log("New state", store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log("currentState", currentState);

// ACTIONS
store.dispatch({
	type: "CHANGE_NAME",
	name: "Tim"
});

store.dispatch({
	type: "ADD_HOBBY",
	hobby: "Boating"
});

store.dispatch({
	type: "ADD_HOBBY",
	hobby: "Fishing"
});

store.dispatch({
	type: "REMOVE_HOBBY",
	id: 2
});

store.dispatch({
	type: "CHANGE_NAME",
	name: "Joe"
});

store.dispatch({
	type: "ADD_MOVIE",
	title: "Star Wars Episode VIII: The Last Jedi",
	genre: "Sci-fi"
});

store.dispatch({
	type: "ADD_MOVIE",
	title: "Rogue One: A Star Wars Story",
	genre: "Sci-fi"
});

store.dispatch({
	type: "REMOVE_MOVIE",
	id: 1
});



