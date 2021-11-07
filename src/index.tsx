import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { CookiesProvider } from 'react-cookie';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <CookiesProvider>
          <I18nextProvider i18n={i18n}>
            <Router>
              <App />
            </Router>
            </I18nextProvider>
          </CookiesProvider>
      </React.StrictMode>
  </Provider>,
  document.querySelector('#root'),
);