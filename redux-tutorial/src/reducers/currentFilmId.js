import { DELETE_FILM, VIEW_FILM } from  '../constants'
const initialState = false

export default function currentFilmId( state=initialState, action) {
  switch (action.type) {
    case DELETE_FILM:
      if (state === action.payload) {
        return false
      }
      return state
    case VIEW_FILM:
      return action.payload
    default:
      return state
  }
}
