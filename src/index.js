import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App2 from './resources/js/App2';  */
import MHST2 from './resources/js/MHST2';
import reportWebVitals from './reportWebVitals';

// NOTE: 避免使用者用 http 來訪問, 他會造成 twitch embedded 失效
if (window.location.protocol === 'http:' && !window.location.host.match('localhost|127.0.0.1')) {
  console.warn('auto js redirect to https');
  window.location.href = window.location.href.replace('http://', 'https://');
} else {
  ReactDOM.render(
    <React.StrictMode>
      <MHST2 />
    </React.StrictMode>,

    document.getElementById('root')
  );
}

reportWebVitals();
