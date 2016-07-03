import React, { Component } from 'react'
import	{	bindActionCreators	}	from	'redux'
import { connect} from 'react-redux'
import User from '../components/User.js'
import Page from '../components/Page.js'
import	*	as	pageActions	from	'../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    const	{	setYear	}	=	this.props.pageActions
    return <div>
      <User name={user.name} />
      <Page page={page} setYear={setYear} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch)	{
  return {
    pageActions: bindActionCreators(pageActions,	dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
