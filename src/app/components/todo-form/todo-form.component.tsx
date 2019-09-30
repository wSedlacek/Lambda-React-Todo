import React, { FormEvent } from 'react';
import { Todo } from '../../models/Todo';

type TodoFormProps = {
  onSubmit: (title: string) => void;
};
type TodoFormState = {
  title: string;
};

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  constructor(props: TodoFormProps) {
    super(props);

    this.state = { title: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { title } = this.state;
    onSubmit(title);
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input value={title} onChange={(e) => this.setState({ title: e.target.value })} />
        <button type='submit'>Add Todo</button>
      </form>
    );
  }
}

export { TodoForm };
