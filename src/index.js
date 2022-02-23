import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import App from './App';
import './App.css';
import reducer, { initialState } from './contexts/Reducer';
import { StateProvider } from './contexts/StateProvider';
import { queryClient } from './utils/queryClient';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
