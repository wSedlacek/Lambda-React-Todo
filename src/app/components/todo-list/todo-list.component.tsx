// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import { Todo } from '../../models/Todo';

type TodoListProps = {
  todos: Todo[];
};
type TodoListState = {};

class TodoList extends React.Component<TodoListProps, TodoListState> {
  render() {
    return <div></div>;
  }
}

export { TodoList };
