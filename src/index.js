import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import Main from './components';
import { Theme, serviceWorker } from './utils';
import getStore from './store';

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
