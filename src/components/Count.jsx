import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span>Count: {this.props.todos.length}</span>;
  }
}

export default Count;
