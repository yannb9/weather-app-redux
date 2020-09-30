import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Root from './reducer'

const middleWare = applyMiddleware(thunk, logger);
export default createStore(Root, middleWare);