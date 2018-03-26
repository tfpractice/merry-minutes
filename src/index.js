import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import Main from './components';
import { Theme, serviceWorker } from './utils';
import getStore from './store';

const App = () => (
  <Provider store={getStore()}>
    <MuiThemeProvider theme={Theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>
);

render(<App />, document.getElementById('root'));
serviceWorker();
