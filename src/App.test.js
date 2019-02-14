import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom"
// import './setupTests'
import { mount } from 'enzyme'
import ListNotes from './ListNotes'
import ShowNote from './ShowNote'

describe('App Component', () => {

  let component
  // called before every test
  beforeEach(() => {
    // this time, mount instead of shallow because we will have subcomponents within our ToDos component
    component = mount(<Router><App /></Router>)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should contain subcomponents ListNotes and ShowNote', () => {
    expect(component.find(ListNotes))
    expect(component.find(ShowNote))
  })
})

