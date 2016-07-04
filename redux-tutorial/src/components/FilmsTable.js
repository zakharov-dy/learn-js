// import React, { PropTypes } from 'react'
import React from 'react'

const FilmsTable = ({ films, onDeleteFilmClick, onViewFilmClick }) => (
  <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Year</td>
          <td>Raiting</td>
          <td>Actions</td>
        </tr>
      </thead>
    <tbody>
      {films.map((film, filmIndex) =>
        <tr key={filmIndex}>
          <td>{film.nameEN}</td>
          <td>{film.year}</td>
          <td>{film.ratingData.raiting}</td>
          <td>
            <button onClick={() => onDeleteFilmClick(filmIndex)}>
              deleteFilm
            </button>
            <button onClick={() => onViewFilmClick(filmIndex)}>
              viewFilm
            </button>
          </td>
        </tr>
      )}
    </tbody>
  </table>
)

// FilmsTable.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default FilmsTable
