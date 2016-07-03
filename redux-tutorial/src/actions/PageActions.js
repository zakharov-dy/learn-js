import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE, YEARS, CURRENT_YEAR } from	'../constants/Page'

export function setYear(year) {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: {year: year}
    })

    setTimeout(()=> {
      if (year <= CURRENT_YEAR) {
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: {
            year: year,
            photos: YEARS[year+'']
          }
        })
      } else {
        dispatch({
          type: GET_PHOTOS_FAILURE,
          payload: {
            year: year,
            error: `Сейчас только ${CURRENT_YEAR} год!`
          }
        })
      }
    }, 5000)
  }
}
