/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'HelloWorld',
  render: function () {
    return (
      <div className='hello-world'> Hello world! </div>
    );
  }
});