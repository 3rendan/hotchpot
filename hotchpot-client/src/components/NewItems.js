import React, { Component } from 'react';

class NewItems extends Component {
  state = {
    Items : [],
    formInputs: {
      title: '',
      author: '',
      accession_number: ''
    }
  }
  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }
  handleSubmit  = (event) =>{
    event.preventDefault()
    fetch('http://localhost:3000/items', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
 })
   .then(createdItem => {
     return createdItem.json()
   })
   .then(jsonedItem => {
     // reset the form
     this.setState({
       formInputs: {
         title: '',
         author: '',
         accession_number: ''
       },
       items: [jsonedItem, ...this.props.items]
     })
     this.props.getItems()
   })
   .catch(error => console.log(error))
  }

  render () {
    return (
      <div className="col-sm-5 new-Items">
        <nav>
          <h3>New Items?</h3>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title" >Title: </label>
              <input
                type="text"
                id="title"
                value={this.state.formInputs.title}
                onChange={this.handleChange}
              /><br/>
              <label htmlFor="author">Author: </label>
              <input
                type="text"
                id="author"
                value={this.state.formInputs.author}
                onChange={this.handleChange}
              /><br/>
              <label htmlFor="accession_number">Accession Number: </label>
              <input
                type="text"
                id="accession_number"
                value={this.state.formInputs.accession_number}
                onChange={this.handleChange}
              /><br/>
              <input type="submit" className="submit btn btn-default" />
            </form>
          </nav>
      </div>
    )
  }
}

export default NewItems;
