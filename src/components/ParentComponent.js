import React, { Component } from 'react';

import ChildComponent from './ChildComponent.js'
import DisplayComponent from './DisplayComponent.js'

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value})
    // this.setState({whatToSay: this.state.whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});
    document.getElementById("messageCard").classList.remove("hide");
  }
  render() {
      // Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
    return (
      <div className="col-3 mx-auto">
        <div className="form-group text-left">
          <label htmlFor="sayWhat">What do you have to say?</label>
          <input className="form-control" id="sayWhat" aria-describedby="sayWhatHelp" onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" />
          <small id="sayWhatHelp" className="form-text text-muted">We want to hear from you</small>
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}
