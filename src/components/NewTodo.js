import React, { Component } from 'react';

export class NewTodo extends Component {
    render() {
        return (
            <div className="mt-2 mx-2 text-center">
                <button className="btn btn-primary p-4 newitem" style={{background: this.props.color}} onClick={this.props.action}></button>
            </div>
        )
    }
}

export default NewTodo;