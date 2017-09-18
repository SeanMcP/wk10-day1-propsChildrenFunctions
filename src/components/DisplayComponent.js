import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div id="messageCard" className="card hide">
        <div className="card-header">
          Message
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{this.props.sayWhat}</p>
            <footer className="blockquote-footer">You</footer>
          </blockquote>
        </div>
        <div className="card-footer text-center">
          <small className="text-muted">Just now</small>
        </div>
      </div>
    );
  }
}
