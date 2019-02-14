import React from 'react';
import { shallow } from 'enzyme'
// import { mount } from 'enzyme'
import ListNotes from './ListNotes'
// import './setupTests'
// import list from './ListNotes'
// import axios from 'axios'

describe('ListNotes Component', () => {
    // let data
    let component
  // called before every test

  beforeEach(() => {
    component = shallow(<ListNotes />)
  })

//   beforeAll(() => {
//     axios.get('http://localhost:3002/api/notes')
//     .then((res) => {
//         data = res.data
//         return component = shallow(<ListNotes {...data} />)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//   })


  it('renders without crashing', () => {
    component
  });

//   it('should render the notes list', () => {
//       expect(component.contains(data)).toBe(true)
//   })

})

// it('Should render the todo list tasks', () => {
//     component.find(ToDo).forEach((todo, idx) => {
//       expect(todo.find('.task-name').text()).toBe(listItems[idx].task)
//     })
//   })
