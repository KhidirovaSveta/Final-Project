import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducer/index";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from "./redux-toolkit/store";


// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
