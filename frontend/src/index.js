import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<div>Loading</div>}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
