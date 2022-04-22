import './Styles/index.css'
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import App from './Pages/App';
import * as serviceWorker from './HOC/serviceWorker';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

