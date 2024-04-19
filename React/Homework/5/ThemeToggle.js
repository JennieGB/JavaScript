// 4. Component: Создадим компонент для отображения переключателя темы.

import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeToggle = ({ darkTheme, toggleTheme }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={toggleTheme}
        />
        Toggle Theme
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  darkTheme: state.darkTheme
});

export default connect(mapStateToProps, { toggleTheme })(ThemeToggle);
