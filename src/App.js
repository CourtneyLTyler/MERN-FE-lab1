import React, { Component } from 'react';
import './App.css';
import ListNotes from './ListNotes'
import { Route, Switch } from 'react-router-dom'
import ShowNote from './ShowNote'
// import axios from 'axios'


class App extends Component {


  // constructor (props) {
  //   console.log("in the constructor")
  //   super(props)
  //   this.state = {
  //    notes: []
  //   }
  // }

  // setNotes (res) {
  //   this.setState({
  //     notes: res
  //   })
  // }


  // componentDidMount () {
  //   console.log("did mount")
  //   axios.get('http://localhost:3002/api/notes')
  //     .then((res) => {
  //       console.log(res)
  //       this.setState({
  //         notes: res
  //       })
  //       console.log(this.state.notes)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  render() {
    console.log("in the render")
    return (
      <div className="App">

        <main>
          < Switch>
            {/* <Route path='/:id' /> */}
            <Route path='/notes/:id' render={(routerProps)=>< ShowNote {...routerProps}/>} />
            <Route path='/' render={(routerProps)=>< ListNotes  {...routerProps} />}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;


