import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { createRoot } from 'react-dom/client';

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import cartReducer from './redux/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store=configureStore({
  reducer:{
    cart:cartReducer,
  }
})

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<React.StrictMode>
  <BrowserRouter>

<Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>

</React.StrictMode>
  );