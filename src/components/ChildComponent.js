import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    // Dumb Component receiving Props
    return (
      <div>
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}
