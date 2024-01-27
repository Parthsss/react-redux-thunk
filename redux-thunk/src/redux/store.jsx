import {reducer} from './reducer'
import {thunk} from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux';

export const Store = createStore(reducer, applyMiddleware(thunk));