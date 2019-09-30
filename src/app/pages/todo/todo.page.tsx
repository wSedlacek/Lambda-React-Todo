import React from 'react';

import { TodoForm } from '../../components/todo-form/todo-form.component';
import { TodoList } from '../../components/todo-list/todo-list.component';
import { Todo } from '../../models/Todo';

type AppProps = {};
type AppState = {
  itterator: number;
  todos: Todo[];
};

class TodoPage extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      itterator: 0,
      todos: [],
    };

    this.createTodo = this.createTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  }

  private createTodo(title: string) {
    const { itterator, todos } = this.state;
    const newTodo: Todo = {
      id: itterator,
      completed: false,
      task: title,
    };

    this.setState({
      itterator: itterator + 1,
      todos: [...todos, newTodo],
    });
  }

  private toggleTodo(newTodo: Todo) {
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({ todos: newTodos });
  }

  private clearTodos() {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.completed);
    this.setState({ todos: newTodos });
  }

  public render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <TodoForm onSubmit={this.createTodo} onClear={this.clearTodos} />
        <TodoList todos={todos} onToggle={this.toggleTodo} />
      </React.Fragment>
    );
  }
}

export { TodoPage };
