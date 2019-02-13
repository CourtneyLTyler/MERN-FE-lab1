import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const notesURL = 'http://localhost:3002/api/notes/'

class ShowNote extends Component {


constructor (props) {
    console.log("in the shownote constructor")
    super(props)
    this.state = {
     note: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount () {

    const noteid = this.props.match.params.id
    console.log(`${notesURL}${noteid}`)
    const url = `${notesURL}${noteid}`

    console.log("did mount in showpage")
    axios.get(url)
      .then((res) => {
        console.log(res)
        this.setState({
          note: res.data
        })
        console.log(this.state.note)
      })
      .catch((err) => {
        console.log(err)
      })
  }

handleDelete=() => {
    const noteid = this.props.match.params.id
    console.log(`${notesURL}${noteid}`)
    const url = `${notesURL}${noteid}`
    axios.delete(url)
        .then(res => {
            console.log(res.data)
        })
        
        .catch(function (response) {
          // handle error
          console.log(response)
        })
    
}


render() {
    // this is empty
    console.log(this.state.title)

        return (
        <div key={this.state.note.title}>
            <p>{this.state.note.title}</p>
            <p>{this.state.note.content}</p>
            <Link to="/">
            <button type="delete" onClick={this.handleDelete}>Delete</button>
            </Link>
        </div>
        )
    }
}


export default ShowNote;