import React from 'react'
import { connect } from 'react-redux'
import { loadFilm } from '../actions'

let AddFilm = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(loadFilm(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
           Load Film
        </button>
      </form>
    </div>
  )
}
export default connect()(AddFilm)
