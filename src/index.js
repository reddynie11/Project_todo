import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const Store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={Store} > <App /> </Provider>  , document.getElementById('root'));

