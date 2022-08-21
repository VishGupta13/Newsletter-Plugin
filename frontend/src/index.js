import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Plugin from './components/Plugin';

const rootEle = document.getElementById('root');
if(rootEle){
  const root = ReactDOM.createRoot(rootEle);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const pluginEle = document.getElementById('plugin');

if(pluginEle){
  const ownerId = pluginEle.getAttribute('owner-id');
  const pl = ReactDOM.createRoot(pluginEle);
  pl.render(
    
<Plugin ownerId = {ownerId} />  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
