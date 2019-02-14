import React from 'react';
import { shallow } from 'enzyme'
import ShowNote from './ShowNote'


describe('ShowNote Component', () => {

    let component

  beforeEach(() => {
    component = shallow(<ShowNote />)
    console.log(component)
  })

  it('renders without crashing', () => {
    component
  });

  it('should have a button that says "Delete"', () => {
    expect(component.contains(<button>Delete</button>)).toBe(true)
  })

})


