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

  render () {
    return (
      <div style={{margin: '10px'}}>
        <input onChange={this.changeTerm.bind(this)} style={{width: '600px'}}></input>
        <button onClick={() => {this.props.searchServer(this.state.searchTerm)}}> Search </button>
      </div>
    )
  }
}

export default SearchBar; 