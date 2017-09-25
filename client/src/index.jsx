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

  componentDidMount() {
    this.fetch();
  }

  fetch() {
   $.ajax({
    method: 'GET',
    url: '/foods',
    success: (data) => {
      this.setState({
        foods: data
      })
      console.log(this.state.foods);
    }
   });

  }

  searchServer(name) {
    console.log('searched server with ', name);

   $.ajax({
    method: 'POST',
    url: '/foods',
    data: {name: name},
    success: (data) => {
      this.fetch();
    }
   });

  }

  render () {
    return (
      <div>
        <SearchBar searchServer={this.searchServer.bind(this)}/>
        <FoodList foods={this.state.foods} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));