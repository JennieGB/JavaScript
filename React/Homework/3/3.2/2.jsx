import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, IconButton, Typography, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            label="Новая задача"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleAddTask}>Добавить</Button>
        </Grid>
      </Grid>
      {tasks.map((task, index) => (
        <Card key={index} style={{ marginTop: '10px' }}>
          <CardContent>
            <Typography variant="body1">{task}</Typography>
            <IconButton onClick={() => handleDeleteTask(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TodoList;

/*
В этом компоненте мы используем два состояния - tasks и newTask. Первое состояние tasks 
хранит список задач, а второе состояние newTask используется для управления вводом новой 
задачи.

При нажатии на кнопку "Добавить", новая задача добавляется в список tasks, если она не пустая. 
При рендеринге списка задач каждая задача представлена компонентом Card из Material UI с текстом 
задачи и кнопкой удаления, реализованной с помощью IconButton и иконки DeleteIcon из Material UI.
*/