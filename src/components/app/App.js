import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from '../pages/main';
import '../vars/vars.scss';

import './App.scss';

export function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}
