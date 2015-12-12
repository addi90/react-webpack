'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'TextAreaCounter',

  propTypes: {
    name: React.PropTypes.string
  },

  _log: function(methodName, args) {
    console.log(methodName, args);
  },

  getInitialState: function () {
    return { name: "Aditya"};
  },

  _textChange: function (ev) {
    this.setState({
      name: ev.target.value
    })
  },

  componentWillUpdate: function() {
    this._log('componentWillUpdate', arguments);
  },

  componentDidUpdate: function(oldProps, oldState) {
    this._log('componentDidUpdate', arguments);
    if (this.state.name.length > 10) {
      this.replaceState(oldState);
    }
  },
  componentWillMount: function() {
    this._log('componentWillMount', arguments);
  },

  componentDidMount: function() {
    this._log('componentDidMount', arguments);
  },

  componentWillUnmount: function() {
    this._log('componentWillUnmount', arguments);
  },

  render: function () {
    return (
      <div>
        <textarea
          value={ this.state.name }
          onChange={ this._textChange } />
        <h3> { this.state.name.length} </h3>
      </div>
    );
  }
});