import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { Todo } from '../../models/Todo';

type TodoCardProps = {
  todo: Todo;
  onToggle: (todo: Todo) => void;
};
type TodoCardState = {};

class TodoCard extends React.Component<TodoCardProps, TodoCardState> {
  render() {
    const { todo, onToggle } = this.props;
    return (
      <Card style={{ margin: 10 }} onClick={() => onToggle(todo)}>
        <CardContent>
          <Typography
            variant='body1'
            style={{ textDecoration: todo.completed ? 'line-through' : '', textAlign: 'center' }}>
            {todo.task}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export { TodoCard };
