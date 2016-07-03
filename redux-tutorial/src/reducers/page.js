import {	GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE	}	from	'../constants/Page'

const initialState = {
  year: '2016',
  photos: [],
  fetching: false,
  error: false
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {...state, fetching: true, year: action.payload.year, error: false }
    case GET_PHOTOS_SUCCESS:
      return {...state, fetching: false, year: action.payload.year,  photos: action.payload.photos, error: false}
    case GET_PHOTOS_FAILURE:
      return {...state, fetching: false, error: action.payload.error }
    default:
      return state
  }
}
