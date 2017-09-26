import React from 'react';

class SearchBar extends React.Component  {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  changeTerm (event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  
  onEnter (event) {
    if (event.key === 'Enter') {
      this.props.searchServer(this.state.searchTerm)
    }
  }

  render () {
    return (
      <div style={{margin: '10px'}}>
        <input onChange={this.changeTerm.bind(this)} style={{width: '600px'}} onKeyUp={this.onEnter.bind(this)}></input>
        <button onClick={() => {this.props.searchServer(this.state.searchTerm)}}> Search </button>              
        <button style={{marginLeft: '10px'}} onClick={this.props.setBookmarks}> Bookmarks </button>
      </div>
    )
  }
}

export default SearchBar; 