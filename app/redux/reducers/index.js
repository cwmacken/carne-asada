import { combineReducers } from 'redux'
import sampleOne from './sampleOne'
import sampleTwo from './sampleTwo'

const sampleApp = combineReducers({
  sampleOne,
  sampleTwo
})

export default sampleApp
