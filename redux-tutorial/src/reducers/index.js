import { combineReducers } from 'redux'
import films from './films'
import currentFilmId from './currentFilmId'
import isFeatching from './isFeatching'

export default combineReducers({
  films,
  currentFilmId,
  isFeatching
})
