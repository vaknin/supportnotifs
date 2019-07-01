import React, { Component } from 'react'

export class NewTodo extends Component {
    render() {
        return (
            <div className="mt-3 text-center">
                <button className="btn btn-primary btn-danger" onClick={this.props.action}>+</button>
            </div>
        )
    }
}

export default NewTodo
