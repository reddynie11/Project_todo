import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbconfig from './config/fbconfig';


const Store = createStore(rootReducer, 
    compose(applyMiddleware(thunk.withExtraArgument({ getFirebase ,getFirestore})),
    reduxFirestore(fbconfig),
    reactReduxFirebase(fbconfig)
    ));


ReactDOM.render(<Provider store={Store} > <App /> </Provider>  , document.getElementById('root'));

