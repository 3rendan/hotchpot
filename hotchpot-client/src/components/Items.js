import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Items extends Component {
  render () {
    return (
      <div className="col-sm-7">
        { this.props.items && this.props.items.map((item, i) => {
            return  (
                <div key={item.id} className="items">
                    <Link to={`/show/${item.id}`}><h3><span className="title">{ item.title } </span>| <span className="author">{ item.author } </span></h3></Link>
                    <small>The accession number is { item.accession_number }</small><br />
                    <button className="btn btn-warning" onClick={() => this.props.handleUpdate(item.id)}> UPDATE </button>
                    <button className="btn btn-danger" onClick={() => this.props.deleteRecord(item.id, i)}> DELETE </button>
                </div>
            )
        })}
      </div>
    )
  }
}

export default Items;
