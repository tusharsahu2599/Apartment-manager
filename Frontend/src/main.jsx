import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from  './components/Redux/store'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './components/context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
    </React.StrictMode>
)
