import React, { Component } from 'react';

export class Todo extends Component {
    render() {
        return (
            <div className={'input-group ml-3 mb-4 ' + (this.props.important ? 'col-12' : 'col-3')}>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary border border-dark rounded delete" type="button" onClick={this.props.removeItem} id={this.props.index}>X</button>
                    <button className="btn btn-outline-secondary border border-dark rounded important" type="button" onClick={this.props.importantItem} id={this.props.index}>!</button>
                </div>
                <input type="text" className="form-control-lg form-control todo border border-dark rounded" style={{background: this.props.color}}></input>
            </div>
        );
    }
}

export default Todo;
//' + this.props.important ? 'col-3' : 'col-6'