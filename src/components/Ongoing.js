import React, { Component } from 'react'

export default class Ongoing extends Component{
    render(){
        return (
            <div>
            <ul type='list-group'>
            {this.props.list.map((i, id) => (
                <li key={id} className="list-group-item">
                    {i}
                    
                    <button onClick={e => this.props.handleDelete(id, e)}>D</button>
                    <button onClick={e => this.props.togglePopup(id, e)}>U</button>
                    <button onClick={e => this.props.handleComplete(id, e)}>C</button>
                    
                </li>
                
            )
            )}</ul>
            </div>
        )
    }}

