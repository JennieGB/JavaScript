// 2. Actions: Создадим действие для переключения темы.

import { TOGGLE_THEME } from './types';

export const toggleTheme = () => ({
  type: TOGGLE_THEME
});
