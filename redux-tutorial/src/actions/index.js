import { GET_FILM_REQUEST, GET_FILM_SUCCESS, DELETE_FILM, VIEW_FILM } from  '../constants'

export function loadFilm(kinopoiskFilmId) {
  return (dispatch) => {
    dispatch({
      type: GET_FILM_REQUEST
    })

    let request = new XMLHttpRequest();
    request.open('GET', `http://api.kinopoisk.cf/getFilm?filmID=${kinopoiskFilmId}`);

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        let response = JSON.parse(this.responseText);
        dispatch({
          type: GET_FILM_SUCCESS,
          payload: response
        })
        // console.log('Status:', this.status);
        // console.log('Headers:', this.getAllResponseHeaders());
        // console.log('Body:', this.responseText);
      }
    };

    request.send();
  }
}

export function deleteFilm(id) {
  return {
    type: DELETE_FILM,
    payload: id
  }
}

export function viewFilm(id) {
  return {
    type: VIEW_FILM,
    payload: id
  }
}
