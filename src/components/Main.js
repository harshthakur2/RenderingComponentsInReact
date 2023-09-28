import { Component } from "react";
import Display from "./Display";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: null, // Initially, no page is shown
    };
  }
  handleClick = (page) => {
    this.setState({ point: page });
  };
  
  render() {
    return (
      <div>
        <h1>Main</h1>
        <button onClick={() => this.handleClick('first')}>First</button>
        <button onClick={() => this.handleClick('second')}>Second</button>
        <button onClick={() => this.handleClick('third')}>Third</button>
        <Display point={this.state.point} />
      </div>
    );
  }
}
export default Main;