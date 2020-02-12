import React, { Component } from "react"
import axios from "axios"


class UpdateItem extends Component {
    // state = {
    //     artist: "",
    //     title: "",
    //     label: "",
    //     format: "",
    //     year: ""
    // }
    componentDidMount = () => {
        axios.get("http://localhost:3001/items/id/" + this.findID())
        .then(response => {
            const state = {
                title: response.data.title,
                author: response.data.author,
                accession_number: response.data.accession_number
            }
        })
    }

    //put route
    // handleUpdate = (e) => {
    //     e.preventDefault();
    //     const Items = {
    //         artist: this.state.artist,
    //         title: this.state.title,
    //         format: this.state.format,
    //         label: this.state.label,
    //         year: this.state.year
    //     };
    //     const updatedRecord = [];
    //     updatedRecord.push(Items);
    //     if(this.state.title){
    //         axios.put("http://localhost:3001/Items/id/" + this.findID(), {...Items})
    //     }
    // }
    render () {
        return (
            <div>
                <div>
                    <div>Update the record</div>
                    <div>
                        Update the record here. <br/>
                        Change the artist, title, label, format, or year.<br/>
                    </div>
                </div>

                <form onSubmit={this.handleUpdate}>
                      <label htmlFor="artist" >Title: </label>
                      <input
                        type="text"
                        id="artist"
                        value={this.state.formInputs.artist}
                        onChange={this.handleUpdate}
                      /><br/>
                      <label htmlFor="title">Author: </label>
                      <input
                        type="text"
                        id="title"
                        value={this.state.formInputs.title}
                        onChange={this.handleUpdate}
                      /><br/>
                      <label htmlFor="accession_number">Accession Number: </label>
                      <input
                        type="text"
                        id="accession_number"
                        value={this.state.formInputs.accession_number}
                        onChange={this.handleUpdate}
                      /><br/>
                      <input type="submit" className="submit btn-default" />
                    </form>
                    <div>
                        <button className="btn btn-primary" type="submit">Submit Changes</button>
                    </div>

                <div>
                    <a href={"/items/" + this.findID()}>View the updated item</a>
                    <a href="/items/">See your entire collection</a>
                </div>
            </div>
        )
    }
}


export default UpdateItem
