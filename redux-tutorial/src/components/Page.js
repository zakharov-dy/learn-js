import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
  onYearButtonClick = (e) => {
    e.stopPropagation()
    this.props.setYear(+e.target.innerText)
  }

  render(){
    const { year, photos, error, fetching} = this.props.page
    const loader = fetching && (<p>Загрузка</p>)
    console.log(loader);
    let content = ''
    if (!error && !loader) {
      content = (
        <div>
          <p>You have {photos.length} photos</p>
          <h3>{year} год</h3>
        </div>
      )
    } else {
      content = (<p>{error}</p>)
    }
    return <div>
      <button onClick={this.onYearButtonClick}>2017</button>
      <button onClick={this.onYearButtonClick}>2016</button>
      <button onClick={this.onYearButtonClick}>2015</button>
      {loader}
      {content}
    </div>
  }
}

Page.PropTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired
}
