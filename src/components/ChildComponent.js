import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    // Dumb Component receiving Props
    return (
      <div>
        <div className="form-group">
          <input className="btn btn-primary mt-2" type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}
