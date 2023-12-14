import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Greetings from './Greetings'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
};
