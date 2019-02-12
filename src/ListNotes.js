import React, { Component } from 'react';
import axios from 'axios'
// import {Link} from  'react-router-dom'

class ListNotes extends Component {

    constructor (props) {
        console.log("in the constructor")
        super(props)
        this.state = {
         notes: []
        }
      }

      componentDidMount () {
        console.log("did mount")
        axios.get('http://localhost:3002/api/notes')
          .then((res) => {
            console.log(res)
            this.setState({
              notes: res.data
            })
            console.log(this.state.notes)
          })
          .catch((err) => {
            console.log(err)
          })
      }

    render() {
        console.log(this.state.notes)
        let list = this.state.notes.map(cv => {
            return (
            <div key={cv.title}>
                {/* <Link to="/notes/:id"><p>{cv.title}</p></Link> */}
                <a href={"/notes/" + cv._id}><p>{cv.title}</p></a>
                <p>{cv.content}</p>
                
            </div>
            )
        })
        return (
            <div>
                {list}
            </div>
        );
    }
}


export default ListNotes;

