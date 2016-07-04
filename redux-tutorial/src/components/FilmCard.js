// import React, { PropTypes } from 'react'
import React from 'react'

const FilmCard = ({ currentFilm }) => (
  <div>
    <h2>{currentFilm.nameRU} ({currentFilm.nameEN})</h2>
    <h4>{currentFilm.slogan}</h4>
    <img src={`http://kinopoisk.ru/images/${currentFilm.posterURL}`} alt="poster"/>
    <p><b>Описание: </b>{currentFilm.description}</p>
  </div>
)

export default FilmCard
