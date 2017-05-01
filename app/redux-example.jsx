var redux = require("redux");

console.log("Starting redux example");

var actions = require("./actions/index");
var store = require("./store/configureStore").configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log("New state", store.getState());

	if (state.map.isFetching) {
		document.getElementById("app").innerHTML = "Loading...";
	} else if (state.map.url) {
		document.getElementById("app").innerHTML = "<a target='_blank' href='" + state.map.url + "'>View Your Location</a>"
	}
});
// unsubscribe();

var currentState = store.getState();
console.log("currentState", currentState);

store.dispatch(actions.fetchLocation());

// ------------
// ACTIONS
// ------------
store.dispatch(actions.changeName("Tim"));

store.dispatch(actions.addHobby("Boating"));
store.dispatch(actions.addHobby("Fishing"));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName("Joe"));

store.dispatch(actions.addMovie("Star Wars Episode VIII: The Last Jedi", "Sci-fi"));
store.dispatch(actions.addMovie("Rogue One: A Star Wars Story"));
store.dispatch(actions.removeMovie(1));



