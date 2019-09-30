import React from 'react';

import { TodoForm } from '../components/todo-form/todo-form.component';
import { TodoList } from '../components/todo-list/todo-list.component';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TodoForm />
        <TodoList />
      </React.Fragment>
    );
  }
}

export { App };
