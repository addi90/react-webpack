//module.exports = React.createClass({
//  render: function() {
//    var only = React.Children.only(this.props.children);
//    console.log(only);
//    return (
//      <div>
//        {this.props.name}
//      </div>
//    );
//  }
//});

import React from 'react';

let SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
    console.log('componentWillMount:mixin')
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
    console.log('setInterval:mixin')
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
    console.log('componentWillUnmount:mixin')
  }
};

export default class ReactChildren extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      seconds: 0
    }
  }

  // mixins are not supported in ES6
  //mixins = [SetIntervalMixin];

  componentWillMount () {
    this.intervals = [];
    console.log('componentWillMount:mixin')
  }

  setInterval () {
    this.intervals.push(setInterval.apply(null, arguments));
    console.log('setInterval:mixin')
  }

  componentWillUnmount () {
    this.intervals.map(clearInterval);
    console.log('componentWillUnmount:mixin')
  }

  componentDidMount () {
    this.setInterval(this.tick, 1000); // Call a method on the mixin
    console.log('componentDidMount:mixin')
  }

  tick = () => {
    this.setState({seconds: this.state.seconds + 1});
  }

  render () {
    let only = React.Children.only(this.props.children);
    //console.log(only);
    return (
      <div>
        React has been running for {this.state.seconds} seconds.
      </div>
    );
  }
}