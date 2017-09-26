import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FoodList from './components/FoodList.jsx';
import SearchBar from './components/SearchBar.jsx';
import Maps from './components/Maps.jsx';
import FoodDisplay from './components/FoodDisplay.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      bookmarks: [],
      bookmark: {},
    }
  }

  componentDidMount() {
    this.getBookMarks();
  }

  renderLocation(bookmark) {
    this.setState({
      bookmark: bookmark
    })
  }
  
  setBookmarks() {
    this.setState({
      foods: this.state.bookmarks
    });
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
        this.setState({
          bookmark: item
        }, () => {
        this.fetch(item.query);
        })
      }
    })
  }

  render () {
    return (
      <div>
        <SearchBar searchServer={this.searchServer.bind(this)} setBookmarks={this.setBookmarks.bind(this)} />
        <br></br>
        <FoodDisplay bookmark={this.state.bookmark} />
        <br></br>
        <Maps bookmarks={this.state.bookmarks} renderLocation={this.renderLocation.bind(this)} />
        <br></br>
        <FoodList foods={this.state.foods} bookmarkFood={this.bookmarkFood.bind(this)} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));