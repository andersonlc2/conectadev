import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './store';

import Auth from './components/Auth';
import Home from './pages/Home';
import SignIn from './pages/SignIn';


import GuestRoute from './routes/GuestRoute';
import './mock';

function App() {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="/" element={<Home />} />
              <GuestRoute path="/sign-in" element={<SignIn />} />
              <Route path="*" element={<h4>Not Found: 404 !</h4> } />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
