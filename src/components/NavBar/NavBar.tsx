import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Typography,
  SelectChangeEvent,
  AppBar,
  Toolbar,
  SxProps,
} from '@mui/material';

const navStyles: SxProps = {
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  p: 2,
  '&:hover': {
    color: '#bababa',
  },
  typography: { sm: 'h6', xs: 'body2' }
};

function NavBar() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (event: SelectChangeEvent) => {
    const languageValue = event.target.value;
    i18n.changeLanguage(languageValue);
  };

  const handleClick = () => {
    const id = Math.floor(Math.random() * 20 + 1);
    navigate(`/dishes/${id}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src="/favicon-32x32.png" alt="PL flag" />
          <Typography component={NavLink} to="/dishes" sx={navStyles}>
            {t('Dishes') as string}
          </Typography>
          <Typography onClick={handleClick} sx={navStyles}>
            {t('Random') as string}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <FormControl size='small'>
            <Select
              sx={{ color: 'white', typography: { sm: 'h6', xs: 'body2' } }}
              id="language-select"
              value={i18n.language}
              onChange={changeLanguageHandler}
            >
              <MenuItem value={'en'}><span>English</span></MenuItem>
              <MenuItem value={'pl'}><span>Polish</span></MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
