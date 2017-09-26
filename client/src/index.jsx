import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FoodList from './components/FoodList.jsx';
import SearchBar from './components/SearchBar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foods: []
    }
  }

  // componentDidMount() {
  //   this.fetch();
  // }

  fetch(name) {
   $.ajax({
    method: 'GET',
    url: `/foods?query=${name}`,
    success: (data) => {
      this.setState({
        foods: data
      });
    }
   });

  }

  searchServer(name) {
   $.ajax({
    method: 'POST',
    url: '/foods',
    data: {name: name},
    success: (data) => {
      this.fetch(name);
    }
   });

  }

  bookmarkFood(item) {
    console.log('clicked', item);
  }

  render () {
    return (
      <div>
        <SearchBar searchServer={this.searchServer.bind(this)}/>
        <br></br>
        <FoodList foods={this.state.foods} bookmarkFood={this.bookmarkFood.bind(this)} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));