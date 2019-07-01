import React, { Component } from 'react';

export class Todo extends Component {
    render() {
        return (
            <div className="input-group ml-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.removeItem} id={this.props.index}>X</button>
                </div>
                <input type="text" className="form-control-lg form-control todo" placeholder="Type here.." style={{background: this.props.color}}></input>
            </div>
        );
    }
}

export default Todo;