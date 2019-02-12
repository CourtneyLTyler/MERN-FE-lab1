import React, { Component } from 'react';
import axios from 'axios'

const notesURL = 'http://localhost:3002/api/notes/'

class ShowNote extends Component {

//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

constructor (props) {
    console.log("in the shownote constructor")
    super(props)
    this.state = {
     note: []
    }
  }

  componentDidMount () {

    const noteid = this.state.id;
    console.log(noteid)
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

render() {
    // this is empty
    console.log(this.state.note)

        return (
        <div key={this.state.title}>
            <p>{this.state.title}</p>
            <p>{this.state.content}</p>
        </div>
        )
    }
}


export default ShowNote;