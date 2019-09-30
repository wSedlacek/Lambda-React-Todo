import React from 'react';

import { TodoPage } from './pages/todo/todo.page';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos! But for real this time!</h2>
        <TodoPage />
      </div>
    );
  }
}

export { App };
