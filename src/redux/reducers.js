import { combineReducers } from 'redux'
import darkModeReducer from './darkModeReducer'
import languageReducer from './languageReducer'

export default combineReducers({ darkModeReducer, languageReducer })