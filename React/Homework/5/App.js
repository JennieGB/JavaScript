// 5. App Component: Объединим все в нашем главном компоненте приложения.

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import themeReducer from './reducer';
import ThemeToggle from './ThemeToggle';

const store = createStore(themeReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Theme Switcher</h1>
        <ThemeToggle />
      </div>
    </Provider>
  );
};

export default App;
