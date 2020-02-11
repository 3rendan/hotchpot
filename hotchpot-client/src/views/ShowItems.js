import React, { Component } from 'react'
import Items from './Items.js';
import axios from 'axios'

class Show extends Component {
  constructor(props){
    super(props)
    this.state = {
          title: '',
          author: '',
          accession_number: ''
      }
    this.showItem = this.showItem.bind(this)
    }
    componentDidMount() {
      this.getItems();
    }
    getItems = () =>{
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(json => this.setState({items: json}))
      .catch(error => console.error(error))
    }

    showRecord(id) {
      // console.log(id);
        axios.get(`http://localhost:3000/items/${id}/`)
        .then(response => this.setState({
            title: response.data.title,
            author: response.data.author,
            accession_number: response.data.accession_number
        }));
    }
    render () {
        return (
          <>
            { this.props.items && this.props.items.map((item) => {
              <div key={item.id} className="items">
                  <Link to={`/show/${item.id}`}><h3><span className="title">{ item.title } </span>| <span className="author">{ item.author } </span></h3></Link>
                  <small>The accession number is { item.accession_number }</small><br />
                  <button className="btn btn-warning" onClick={() => this.props.handleUpdate(item.id)}> UPDATE </button>
                  <button className="btn btn-danger" onClick={() => this.props.deleteRecord(item.id, i)}> DELETE </button>
              </div>
          </>
        )
      })
    }
}


export default Show
