import React from 'react';

import { TodoCard } from '../todo-card/todo-card.component';

import { Todo } from '../../models/Todo';

type TodoListProps = {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
};
type TodoListState = {};

class TodoList extends React.Component<TodoListProps, TodoListState> {
  render() {
    const { todos, onToggle } = this.props;
    return todos.map((todo) => <TodoCard todo={todo} onToggle={onToggle}></TodoCard>);
  }
}

export { TodoList };
