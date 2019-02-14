import React, { Component } from 'react';

class ListNotes extends Component {

    render() {
        console.log(this.props.notes)
        if(this.props.notes) {
        let list = this.props.notes.map(cv => {
            return (
            <div key={cv.title}>
                <a href={"/notes/" + cv._id}><p>{cv.title}</p></a>
                <p>{cv.content}</p>           
            </div>
            )      
        })
        return (
            <div>
                {list}
            </div>
        );}
    }
}


export default ListNotes;

