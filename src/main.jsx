import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
        <ToastContainer position="top-right" autoClose={2000} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
