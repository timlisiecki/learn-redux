var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");

// Load Foundation
$(document).foundation();

// App CSS
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route />
            <IndexRoute />
        </Route>
    </Router>,
    document.getElementById('app')
);

require("./redux-example.jsx");

