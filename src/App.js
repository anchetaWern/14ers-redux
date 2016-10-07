import React, { Component } from 'react';

import '../node_modules/picnic/releases/picnic.min.css';

import VisibleCards from './containers/VisibleCards';
import VisibleMarkers from './containers/VisibleMarkers';
import SearchFilters from './components/SearchFilters';

class App extends Component {

  render() {
    return (
      <div className="App flex two">
        <VisibleMarkers />
        <div id="filters-container">
          <SearchFilters />
          <VisibleCards />
        </div>
      </div>
    );
  }
}

export default App;
