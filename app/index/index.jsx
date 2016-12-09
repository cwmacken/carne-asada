import React from 'react';
require("./index.less")
import { Link } from 'react-router'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 className="index" >Index</h1>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/brokenlink">Error</Link>
      </div>
    );
  }
}
