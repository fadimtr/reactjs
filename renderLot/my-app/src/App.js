import React, { Component } from 'react';
import FastTable from './table/fastTableComponent';
import DefaultTable from './table/defaultTableComponent';
import './App.css';

const NUMBER_OF_ROWS = 100000;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">Render Lot Of Rows</div>
        <div className="description">
          Let's test rendering a table with a huge number of rows and keep it so fast
        </div>
        <div className="content">
            <FastTable numberOfRows={NUMBER_OF_ROWS}/>
            <DefaultTable numberOfRows={NUMBER_OF_ROWS}/>            
        </div>
      </div>
    );
  }
}

export default App;
