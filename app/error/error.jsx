import React from 'react';
var broke = require('../assets/images/youBlewIt.jpg')
import { Link } from 'react-router'

export default class Error extends React.Component {
  render() {
    return (
      <div>
        <h1>Route not found</h1>
        <h3><Link to="/">Back To Safety</Link></h3>
        <img src={broke}></img>
      </div>
    );
  }
}
