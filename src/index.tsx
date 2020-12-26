import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App/App';
import './styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// HMR
if (import.meta.hot) {
  import.meta.hot.accept();
}
