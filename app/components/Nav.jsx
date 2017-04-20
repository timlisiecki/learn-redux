var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                    <li className="menu-text">React Boilerplate</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: "bold"}}>Link</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: "bold"}}>Link</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="http://www.timlisiecki.com/webdev.html" target="_blank">Tim Lisiecki</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;