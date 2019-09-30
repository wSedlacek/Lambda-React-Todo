import React from 'react';
import { Button, TextField, Card, CardContent, CardActions } from '@material-ui/core';

type TodoFormProps = {
  onSubmit: (title: string) => void;
  onClear: () => void;
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

  handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { title } = this.state;
    onSubmit(title);
  }

  render() {
    const { onClear } = this.props;
    const { title } = this.state;

    return (
      <Card>
        <CardContent>
          <TextField
            label='Todo'
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
        </CardContent>
        <CardActions>
          <Button onClick={this.handleSubmit}>Add Todo</Button>
          <Button onClick={() => onClear()}>Clear Completed</Button>
        </CardActions>
      </Card>
    );
  }
}

export { TodoForm };
