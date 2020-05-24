import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to={'/Detail/10'}> Home </Link>
      </nav>
    );
  }
}
