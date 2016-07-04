import React, { Component } from 'react'
import AddFilm from './AddFilm'
import FilmsTable from '../components/FilmsTable'
import FilmCard from '../components/FilmCard'
import { connect} from 'react-redux'
// import	{	bindActionCreators	}	from	'redux'
// import	{deleteFilm, viewFilm}	from	'../actions'
import	{deleteFilm, viewFilm}	from	'../actions'

class App extends Component {
  render() {
    const	{	films,	deleteFilm,	viewFilm, currentFilm }	=	this.props
    let filmView;
    console.log(currentFilm);
    if (currentFilm) {
      filmView = (<FilmCard currentFilm={currentFilm}/>)
    }
    return <div>
            <AddFilm />
            <FilmsTable films={films}
                        onDeleteFilmClick={deleteFilm}
                        onViewFilmClick={viewFilm}
            />
            {filmView}
          </div>
  }
}

function mapStateToProps(state) {
  return {
    films: state.films,
    currentFilm: typeof state.currentFilmId === 'number' && state.films[state.currentFilmId]
  }
}

function mapDispatchToProps(dispatch)	{
  return {
    deleteFilm: id => {dispatch(deleteFilm(id))},
    viewFilm: id => {dispatch(viewFilm(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
