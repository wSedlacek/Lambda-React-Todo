import React from 'react';

import { TodoForm } from '../../components/todo-form/todo-form.component';
import { TodoList } from '../../components/todo-list/todo-list.component';
import { Todo } from '../../models/Todo';

import { BehaviorSubject } from 'rxjs';

type TodoProps = {};
type TodoState = {
  itterator: number;
  shownTodos: Todo[];
  todos: BehaviorSubject<Todo[]>;
  search: BehaviorSubject<string>;
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
      itterator: storedTodos.length,
      todos: new BehaviorSubject(storedTodos),
      shownTodos: storedTodos,
      search: new BehaviorSubject(''),
    };

    this.updateTodos = this.updateTodos.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  public componentDidMount() {
    //Effects (RXJS)
    this.state.search.subscribe((search) => {
      const todos = this.state.todos.getValue();
      this.setState({
        ...this.state,
        shownTodos: todos.filter((todo) => todo.task.includes(search)),
      });
    });

    this.state.todos.subscribe((todos) => {
      const search = this.state.search.getValue();
      this.setState({
        ...this.state,
        shownTodos: todos.filter((todo) => todo.task.includes(search)),
      });
    });
  }

  private updateTodos(todos: Todo[]) {
    this.state.todos.next(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  private createTodo(title: string) {
    const { itterator } = this.state;
    const todos = this.state.todos.getValue();

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
    const todos = this.state.todos.getValue();

    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) todo.completed = !todo.completed;
      return todo;
    });

    this.updateTodos([...newTodos]);
  }

  private clearTodos() {
    const todos = this.state.todos.getValue();
    const newTodos = todos.filter((todo) => !todo.completed);
    this.updateTodos([...newTodos]);
  }

  private handleSearch(search: string) {
    this.state.search.next(search);
  }

  public render() {
    const { shownTodos } = this.state;

    return (
      <React.Fragment>
        <TodoForm
          onSubmit={this.createTodo}
          onClear={this.clearTodos}
          onSearch={this.handleSearch}
        />
        <TodoList todos={shownTodos} onToggle={this.toggleTodo} />
      </React.Fragment>
    );
  }
}

export { TodoPage };
