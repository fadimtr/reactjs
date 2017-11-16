import React, { Component } from 'react';

class DefaultTable extends Component {
  render() {
    
    let rows = Array.apply(null, {length: this.props.numberOfRows}).map( (value,index) => index);

    return (
      <div className="fast-table-wrapper">
        <div className='table-title'>Default Table</div>
        <ul className='fast-table'>
            { rows.map(value => <li key={value}>{value}</li>) }
        </ul>
      </div>
    );
  }
}

export default DefaultTable;
