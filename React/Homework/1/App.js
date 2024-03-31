import React from 'react';
import './App.css';
import Message from './Message';

function App() {
  return (
    <div className="app">
      <Message text="Привет, мир!" />
      <Message text="Это компонент Message в React!" />
    </div>
  );
}

export default App;
