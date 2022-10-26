import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const languageValue = event.target.value;
    i18n.changeLanguage(languageValue);
  };

  return (
    <div className="App-winter-campus">
      <div>
        <select onChange={changeLanguageHandler}>
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </div>
      <Link to={'dish'}>
        <button type="button">{t('Meals') as string}</button>
      </Link>
      <Link to={'dish/pierogi'}>
        <button type="button">{t('Dumplings') as string}</button>
      </Link>
      <Routes>
        <Route path="/" element={<div>{t('Home') as string}</div>}></Route>
        <Route path="/dish" element={<div>{t('Meals') as string}</div>} />
        <Route
          path="/dish/:id"
          element={<div>{t('Dumplings') as string}</div>}
        />
      </Routes>
    </div>
  );
}

export default App;
