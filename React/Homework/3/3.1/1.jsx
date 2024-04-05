import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    const fahrenheitValue = celsiusValue !== '' ? (celsiusValue * 9/5) + 32 : '';
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue);
  };

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    const celsiusValue = fahrenheitValue !== '' ? (fahrenheitValue - 32) * 5/9 : '';
    setFahrenheit(fahrenheitValue);
    setCelsius(celsiusValue);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <TextField
          label="Температура в Цельсиях"
          value={celsius}
          onChange={handleCelsiusChange}
          type="number"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Температура в Фаренгейтах"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          type="number"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

export default TemperatureConverter;

/*
В этом компоненте мы используем два состояния - celsius и fahrenheit, для хранения значений 
температуры в градусах Цельсия и Фаренгейта соответственно. При изменении значения в одном 
из полей, мы пересчитываем значение в другом поле и обновляем состояния celsius и fahrenheit.

Компонент Button из Material UI не требуется для данной реализации, поскольку конвертация 
температур происходит автоматически при изменении значения в полях ввода.
*/