var redux = require("redux");

console.log("Starting redux example");

// ----------------------------------
// Name Reducer and Action Generators
// ----------------------------------
var nameReducer = (state = "Anonymous", action) => {
	switch (action.type) {
		case "CHANGE_NAME":
			return action.name;
		default:
			return state;
	};
};

var changeName = (name) => {
	return {
		type: "CHANGE_NAME",
		name //ES6 equivalent to name: name
	}
};

// -----------------------------------
// Hobby Reducer and Action Generators
// -----------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_HOBBY":
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.hobby
				}
			];
		case "REMOVE_HOBBY":
			return state.filter((hobby) => hobby.id !== action.id);
		default:
			return state;

	}
};

var addHobby = (hobby) => {
	return {
		type: "ADD_HOBBY",
		hobby
	}
};
var removeHobby = (id) => {
	return {
		type: "REMOVE_HOBBY",
		id
	}
};

// ------------------------------------
// Movies Reducer and Action Generators
// ------------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_MOVIE":
			return [
				...state,
				{
					id: nextMovieId++,
					title: action.title,
					genre: action.genre
				}
			];
		case "REMOVE_MOVIE":
			return state.filter((movie) => movie.id !== action.id);
		default:
			return state;
	}
};

var addMovie = (title, genre) => {
	return {
		type: "ADD_MOVIE",
		title,
		genre
	}
};
var removeMovie = (id) => {
	return {
		type: "REMOVE_MOVIE",
		id
	}
};

// -------------------
// Main Reducer
// -------------------

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer
});

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

// ------------
// ACTIONS
// ------------
store.dispatch(changeName("Tim"));

store.dispatch(addHobby("Boating"));
store.dispatch(addHobby("Fishing"));
store.dispatch(removeHobby(2));

store.dispatch(changeName("Joe"));

store.dispatch(addMovie("Star Wars Episode VIII: The Last Jedi", "Sci-fi"));
store.dispatch(addMovie("Rogue One: A Star Wars Story"));
store.dispatch(removeMovie(1));



