// import { GET_FILM_REQUEST } from  '../constants'
import { GET_FILM_REQUEST, GET_FILM_SUCCESS } from  '../constants'
const initialState = false

export default function isFeatching(state = initialState, action) {
  switch (action.type) {
    case GET_FILM_REQUEST:
      return true
    case GET_FILM_SUCCESS:
      return false
    default:
      return state
  }
}
