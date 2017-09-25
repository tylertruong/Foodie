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
      <div>
        <input onChange={this.changeTerm.bind(this)}></input>
        <button onClick={() => {this.props.searchServer(this.state.searchTerm)}}> Search </button>
      </div>
    )
  }
}

export default SearchBar; 