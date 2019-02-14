import React, { Component } from 'react';
import './App.css';
import ListNotes from './ListNotes'
import { Route, Switch } from 'react-router-dom'
import ShowNote from './ShowNote'
import axios from 'axios'


class App extends Component {

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
        console.log(res.data)
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
    console.log("in the render")
    return (
      <div className="App">

        <main>
          < Switch>
            <Route path='/notes/:id' render={(routerProps)=>< ShowNote {...routerProps} {...this.state} />} />
            <Route path='/' render={(routerProps)=>< ListNotes  {...routerProps} {...this.state} notes={this.state.notes} />}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;


