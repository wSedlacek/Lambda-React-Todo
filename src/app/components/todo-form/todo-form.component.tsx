import React from 'react';
import { Button, TextField, Card, CardContent, CardActions } from '@material-ui/core';

type TodoFormProps = {
  onSubmit: (title: string) => void;
  onClear: () => void;
  onSearch: (search: string) => void;
};
type TodoFormState = {
  title: string;
  search: string;
};

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  constructor(props: TodoFormProps) {
    super(props);

    this.state = { title: '', search: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { title } = this.state;
    if (title) onSubmit(title);
  }

  handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const { onSearch } = this.props;
    this.setState({ search: e.target.value });
    onSearch(e.target.value);
  }

  render() {
    const { onClear } = this.props;
    const { title, search } = this.state;

    return (
      <Card>
        <CardContent>
          <TextField
            label='Todo'
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <TextField label='Search' value={search} onChange={this.handleSearch} />
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
