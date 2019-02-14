import React from 'react';
import { shallow } from 'enzyme'
import ListNotes from './ListNotes'

describe('ListNotes Component', () => {

    let component

  beforeEach(() => {
    component = shallow(<ListNotes />)
  })

  it('renders without crashing', () => {
    component
  });

})

