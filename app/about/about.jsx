import React from 'react';
import { Link } from 'react-router'
require("./about.less")

export default class About extends React.Component {
  render() {
    return (
      <div >
        <h1 className="about">About</h1>
        <Link to="/">Index</Link>
      </div>
    );
  }
}
