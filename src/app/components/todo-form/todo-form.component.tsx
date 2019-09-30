import React from 'react';
import { Todo } from '../../models/Todo';

type TodoFormProps = {
  onSubmit: (title: string) => void;
};
type TodoFormState = {};

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  render() {
    return <div></div>;
  }
}

export { TodoForm };
