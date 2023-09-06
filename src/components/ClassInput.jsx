/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { todo: "Just some demo tasks", editing: false },
        { todo: "As an example", editing: false },
      ],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  // TODO change
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleEditChange(e) {
    const editedTodo = e.target.closest("div").id;

    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.todo === editedTodo) {
          return { ...todo, todo: e.target.value };
        }

        return todo;
      }),
    }));
  }

  // TODO change
  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat({
        todo: state.inputVal,
        editing: false,
        inputVal: "",
      }),
      inputVal: "",
    }));
  }

  handleDelete(e) {
    const deletedTodo = e.target.closest("div").id;

    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.todo !== deletedTodo),
    }));
  }

  handleToggleEdit(e) {
    const editedTodo = e.target.closest("div").id;

    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.todo === editedTodo) {
          return { ...todo, editing: !todo.editing };
        }

        return todo;
      }),
    }));
  }

  // TODO
  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <div id={todo.todo}>
              {todo.editing ? (
                <form onSubmit={this.handleToggleEdit}>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="task-entry">Enter a task: </label>
                  <input
                    type="text"
                    name="task-entry"
                    value={todo.todo}
                    onChange={this.handleEditChange}
                  />
                  <button type="submit">Submit</button>
                </form>
              ) : (
                <>
                  <li key={todo}>{todo.todo}</li>
                  <button onClick={this.handleDelete}>Delete</button>
                  <button onClick={this.handleToggleEdit}>Edit</button>
                </>
              )}
            </div>
          ))}
        </ul>
        <Count todos={this.state.todos} />
      </section>
    );
  }
}

export default ClassInput;
