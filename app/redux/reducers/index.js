import { combineReducers } from 'redux'
import sampleOne from './sampleOne'
import sampleTwo from './sampleTwo'
import auth from './auth'

const sampleApp = combineReducers({
  sampleOne,
  sampleTwo,
  auth
})

export default sampleApp
