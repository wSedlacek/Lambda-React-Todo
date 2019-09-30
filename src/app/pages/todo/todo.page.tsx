import React from 'react';

import { TodoForm } from '../../components/todo-form/todo-form.component';
import { TodoList } from '../../components/todo-list/todo-list.component';
import { Todo } from '../../models/Todo';

type TodoProps = {};
type TodoState = {
  itterator: number;
  todos: Todo[];
};

class TodoPage extends React.Component<TodoProps, TodoState> {
  constructor(props: TodoProps) {
    super(props);

    let storedTodos: Todo[] = [];

    try {
      storedTodos = JSON.parse(localStorage.getItem('todos') || '') as Todo[];
    } catch {
      console.warn('Could not find any todos in Local Storage.');
    }

    this.state = {
      itterator: 0,
      todos: storedTodos,
    };

    this.updateTodos = this.updateTodos.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  }

  private updateTodos(todos: Todo[]) {
    this.setState({
      ...this.state,
      todos: [...todos],
    });

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  private createTodo(title: string) {
    const { itterator, todos } = this.state;
    const newTodo: Todo = {
      id: itterator,
      completed: false,
      task: title,
    };

    this.updateTodos([...todos, newTodo]);
    this.setState({
      itterator: itterator + 1,
    });
  }

  private toggleTodo(newTodo: Todo) {
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) todo.completed = !todo.completed;
      return todo;
    });

    this.updateTodos([...newTodos]);
  }

  private clearTodos() {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.completed);
    this.updateTodos([...newTodos]);
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
