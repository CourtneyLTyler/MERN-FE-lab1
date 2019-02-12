import React, { Component } from 'react';
import './App.css';
import ListNotes from './ListNotes'
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'


class App extends Component {


  constructor (props) {
    console.log("in the constructor")
    super(props)
    this.state = {
     notes: null
    }

  }

  componentDidMount () {
    console.log("did mount")
    axios.get('/api/notes')
      .then((res) => {
        console.log(res)
        this.setState({
          notes: res
        })
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
            <Route path='/:id' />
            <Route path='/' render={(routerProps)=>< ListNotes notes={this.state.notes} {...routerProps} {...this.state}/>}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;


