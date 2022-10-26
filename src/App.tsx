import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
} from '@mui/material';

function App() {
  const { t, i18n } = useTranslation();

  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (event: SelectChangeEvent) => {
    const languageValue = event.target.value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <Box m={2}>
      <FormControl size="small">
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={i18n.language}
          label="Language"
          onChange={changeLanguageHandler}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'pl'}>Polish</MenuItem>
        </Select>
      </FormControl>
      <Link to={'meal'}>
        <Button variant="outlined" color="primary">
          {t('Meals') as string}
        </Button>
      </Link>
      <Link to={'meal/dumplings'}>
        <Button variant="outlined" color="secondary">
          {t('Dumplings') as string}
        </Button>
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <Typography variant="h6" gutterBottom component="div">
              {t('Home') as string}
            </Typography>
          }
        ></Route>
        <Route
          path="/meal"
          element={
            <Typography variant="h6" gutterBottom component="div">
              {t('Meals') as string}
            </Typography>
          }
        />
        <Route
          path="/meal/:id"
          element={
            <Typography variant="h6" gutterBottom component="div">
              {t('Dumplings') as string}
            </Typography>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
