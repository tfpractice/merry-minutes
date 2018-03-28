import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import getStore from './store';
import Main from './components';
import { serviceWorker, Theme } from './utils';

const store = getStore();

const App = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={Theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>
);

window.store = store;
render(<App store={store} />, document.getElementById('root'));
serviceWorker();
