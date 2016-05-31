"use strict";

var React = require('react'); //commonjs

var Home = React.createClass({
    render: function() {
        return (
          <div className = "jumbotron">
            <h1> Pluralsight Administration </h1>
            <p> React, React Router and Fulx for ultra responsive web apps</p>
          </div>
        );
    }
});

module.exports = Home;
