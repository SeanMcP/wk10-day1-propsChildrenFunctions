import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="jumbotron">
        <h1 className="display-1">Navigation</h1>
        <h6 className="text-muted">Find your true north</h6>
      </nav>
    );
  }
}
