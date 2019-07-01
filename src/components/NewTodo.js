import React, { Component } from 'react'

export class NewTodo extends Component {
    render() {
        return (
            <div className="p-3 m-3">
                <button className="btn btn-primary" onClick={this.props.action}>New Item</button>
            </div>
        )
    }
}

export default NewTodo
