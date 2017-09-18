import React, { Component } from 'react';

import Header from './Header.js'
import Footer from './Footer.js'

export default class BaseLayout extends Component {
  render() {
    // This should house Header and Footer components and be able to house any children components.
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
