import React, { Component } from 'react'

export default class Complete extends Component {
    

    render() {
       
        return (
            
            <div className="text-left">
                <ul className="list-group ">
                    {this.props.task.map((i, id) => (
                        <li key={id} className="list-group-item">
                            {i}
                            <button onClick={e => this.props.delete(id, e)}>Delete</button>
                        </li>
                    )
                    )}</ul>
            </div>
        )
    }
}
