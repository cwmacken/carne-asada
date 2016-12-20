import { combineReducers } from 'redux'
import sampleOne from './sampleOne'
import sampleTwo from './sampleTwo'
import auth from './auth'
import endpoint from './endpointSample'

const sampleApp = combineReducers({
  sampleOne,
  sampleTwo,
  auth,
  endpoint
})

export default sampleApp
