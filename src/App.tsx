import React from 'react';
import { MainTemplate } from './components/templates/Main';
import { BookPage } from './pages/BookPage';
import { MainPage } from './pages/MainPage';

export const App = () => {
  return (
    <MainTemplate>
      {/* <MainPage /> */}
      <BookPage />
    </MainTemplate>
  );
};
