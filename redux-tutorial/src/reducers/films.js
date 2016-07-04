import { GET_FILM_SUCCESS, DELETE_FILM } from  '../constants'
// import { GET_FILM_SUCCESS, GET_FILM_FAILURE, DELETE_FILM } from  '../constants'
const initialState = []
export default function films(state=initialState, action) {
  switch (action.type) {
    case GET_FILM_SUCCESS:
      return [...state, action.payload ]
    case DELETE_FILM:
    return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
    ]
    default:
      return state
  }
}
