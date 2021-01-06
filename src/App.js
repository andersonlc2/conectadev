import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

import './mock';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h4>Not Found: 404 !</h4> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
