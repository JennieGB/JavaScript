# Чтобы запустить React-приложение, вам нужно выполнить несколько шагов:

1. Убедитесь, что у вас установлен Node.js и npm. Если нет, вы можете загрузить их с официального сайта Node.js: nodejs.org.
2. Создайте новый проект React с помощью Create React App. Выполните следующую команду в вашем терминале:
## 
```
 npx create-react-app my-theme-switcher
 ```

3. Перейдите в каталог вашего нового проекта:
## bush
```
cd my-theme-switcher
```

4. Замените файлы src/App.js, src/actions.js, src/reducer.js, src/ThemeToggle.js, а также создайте новый файл src/types.js содержащий определение типа действия TOGGLE_THEME.
5. Установите Redux и React Redux:
## bush
```
npm install redux react-redux
```

6. Запустите приложение:
## sql
```
npm start
```
