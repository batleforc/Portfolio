import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/main.css'
import './styles/w3.css'
import './styles/api.css'
import Update from './App/Update'
//import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)
console.log(process.env.NODE_ENV)
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Update />
  </React.StrictMode>,
  document.getElementById('root')
);

//the service worker part has been moved to the component /App/Update who handle a good part of all the update


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

