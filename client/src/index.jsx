import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FoodList from './components/FoodList.jsx';
import SearchBar from './components/SearchBar.jsx';
import Bookmarks from './components/Bookmarks.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      bookmarks: []
    }
  }

  componentDidMount() {
    this.getBookMarks();
  }
  
  getBookMarks() {
    $.ajax({
      method: 'GET',
      url: '/foods?bookmarks=bookmarks',
      success: (data) => {
        this.setState({
          bookmarks: data
        });
      }
    });
  }

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
   this.getBookMarks();
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
    $.ajax({
      method: 'PUT',
      url: '/foods',
      data: {id: item.id, bookmarked: item.bookmarked},
      success: (data) => {
        this.fetch(item.query);
      }
    })
  }

  render () {
    return (
      <div>
        <SearchBar searchServer={this.searchServer.bind(this)}/>
        <br></br>
        <Bookmarks bookmarks={this.state.bookmarks} />
        <br></br>
        <FoodList foods={this.state.foods} bookmarkFood={this.bookmarkFood.bind(this)} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));