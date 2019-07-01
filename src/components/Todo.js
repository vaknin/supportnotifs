import React, { Component } from 'react';

export class Todo extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.removeItem}>X</button>
                </div>
                <input type="text" className="form-control-lg form-control todo" placeholder="Notification"></input>
            </div>
        );
    }
}

export default Todo;