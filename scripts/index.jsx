//var React = require('react');
//var HelloWorld = require('./components/HelloWorld');
//var TextAreaCounter = require('./components/TextAreaCounter');
//var ReactChildren = require('./components/ReactChildren');

//React.render(<ReactChildren name="frodo" >
//  <p key="firsty">a child</p>
//</ReactChildren>, document.getElementById('content'));

import ReactChildren from './components/ReactChildren.jsx';
import React from 'react';

React.render(
  <ReactChildren name="frodo" >
    <p key="firsty">a child</p>
  </ReactChildren>,
  document.getElementById('content')
);

