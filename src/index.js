import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';


const Store = createStore(rootReducer);


ReactDOM.render(<Provider store={Store} > <App /> </Provider>  , document.getElementById('root'));

