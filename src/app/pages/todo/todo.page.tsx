import React from 'react';

import { TodoForm } from '../../components/todo-form/todo-form.component';
import { TodoList } from '../../components/todo-list/todo-list.component';
import { Todo } from '../../models/Todo';

type AppProps = {};
type AppState = {
  todos: Todo[];
};

class TodoPage extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      todos: [],
    };

    this.createTodo = this.createTodo.bind(this);
  }

  private createTodo(title: string) {
    const { todos } = this.state;
    const newTodo: Todo = {
      id: todos.length,
      completed: false,
      task: title,
    };

    this.setState({
      todos: [...todos, newTodo],
    });
  }

  public render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <TodoForm onSubmit={this.createTodo} />
        <TodoList todos={todos} />
      </React.Fragment>
    );
  }
}

export { TodoPage };
