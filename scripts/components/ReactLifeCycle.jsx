import React from 'react';

export default class ReactLifeCycle extends React.Component {
  constructor (props) {
    // First event: Initial render: Calls internally `getInitialProps`
    super(props);
    // Second event: Initial render: Calls internally `getInitialState`
    this.state = {};
  }

  // Third event: Initial render
  componentWillMount () {

  }

  // Fourth event: Initial render
  // Third event: State change
  // Fourth event: Props change
  render () {

  }

  // First event: State change
  // Second event: Props change
  shouldComponentUpdate () {

  }

  // Second event: State change
  // Third event: Props change
  componentWillUpdate () {

  }

  // Fourth and last event: State change
  // Fifth and last event: Props change
  componentDidUpdate () {

  }

  // First event: Props change
  componentWillReceiveProps () {

  }

}