import React from 'react';
// import 'src/css/main.css';
import Items from './Items.js';
import NewItems from './NewItems.js';
import UpdateItems from './UpdateItems.js';
// import Show from './components/Show.js';
import axios from 'axios';
class Index extends React.Component {
  state = {
    items: false
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
  // showRecord = (id) => {
    // axios.get(`http://localhost:3000/Items/${id}/`)
    // .then(response => this.setState({
    //     artist: response.data.artist,
    //     title: response.data.title,
    //     format: response.data.format,
    //     label: response.data.label,
    //     year: response.data.year
    // }));
  // }

  handleUpdate = (id) => {
      // e.preventDefault();
      // console.log(`http://localhost:3001/Items/${id}`)
      const Items = {
          title: this.state.title,
          author: this.state.author,
          accession_number: this.state.accession_number
      };
      const updateItem = [];
      console.log(id)
      fetch(`http://localhost:3000/items/${id}`,
        {
          method: 'PUT'
        })
       .then(updatedItem => {
         return updatedItem.json()
       })
       .then(updatedItem => {
         // updatedItem.push(Items);
         console.log(updatedItem)
         // this.props.getItems()
       })
       .catch(error => console.log(error))
      }
  deleteItem = (id, i) =>{
    fetch('http://localhost:3000/items/' + id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          items: [
            ...this.state.items.slice(0, i),
            ...this.state.items.slice(i + 1)
          ]
        })
      })
    }
render(){
  return (
    <div className="Index">
    <div className='container'>
      <div className="App-header">
        <h1>Digital Archive</h1>
      </div>
      <div className='row'>
        <>
          <NewItems items={this.state.items} getItems={this.getItems} />
        </>
        <>
          <Items deleteItem={this.deleteItem} handleUpdate={this.handleUpdate} items={this.state.items} />
        </>
      </div>
      </div>
    </div>
  );
}
}

export default Index;
