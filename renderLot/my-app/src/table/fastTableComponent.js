import React, { Component } from 'react';

class FastTable extends Component {

    constructor(props){
        super(props);

        this.lastScrollTop = 0;

        this.state = {
            rows: Array.apply(null, {length: this.props.numberOfRows}).map( (value,index) => index),
            from:0,
            to: Math.min(30,this.props.numberOfRows),
            median: Math.min(30,this.props.numberOfRows)/2
        }
    }

    updateElements(event){
        let tableTopPosition = document.getElementsByClassName('fast-table')[0].getBoundingClientRect().top;
        let elementScrollTop = document.getElementsByClassName('fast-table')[0].scrollTop;
        let medianTopPosition = document.getElementsByClassName('fast-table-element')[this.state.median].getBoundingClientRect().top;
        let firstTopPosition = document.getElementsByClassName('fast-table-element')[0].getBoundingClientRect().top;
        let elementHeight = 50;
        let st = window.pageYOffset || document
        let from,to,median;
        console.log(this.state.from + ' , ' + this.state.to);

        if(medianTopPosition - elementHeight <= tableTopPosition && this.lastScrollTop < elementScrollTop){
            from = this.state.from + this.state.median;
            to = Math.min(this.state.to + this.state.median,this.state.rows.length);
            median = (to - from)/2;
            this.setState({
                from,
                to,
                median
            });
        }


        this.lastScrollTop = elementScrollTop;
        
    }


    render() {
        
        let {rows} = this.state;

        return (
        <div className="fast-table-wrapper">
            <div className='table-title'>Fast Table</div>
            <ul className='fast-table' onScroll={(event) => this.updateElements.call(this,event)}>
                { rows.slice(this.state.from,this.state.to).map(value => <li className='fast-table-element' key={value}>{value}</li>) }
            </ul>
        </div>
        );
    }
}

export default FastTable;
