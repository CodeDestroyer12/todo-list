import React, { Component } from 'react'

export default class All extends Component {
    render() {
        return (
            <div className="text-left Task">
                <b>Tasks</b>
                <ul type='list-group'>
                    {this.props.list.map((i, id) => (
                        <li key={id} className="list-group-item d-flex justify-content-between">
                            <div>{i}</div>
                            <div>
                                <button onClick={e => this.props.handleDelete(id, e)}>Delete</button>
                                <button onClick={e => this.props.togglePopup(id, e)}>Update</button>
                                <button onClick={e => this.props.handleComplete(id, e)}>Complete</button>
                            </div>
                        </li>

                    )
                    )}</ul><b>Completed</b><ul>
                    {this.props.task !== '' ? this.props.task.map((i, id) => (
                        <li key={id} className="list-group-item"><del>
                            {i}
                            <button onClick={e => this.props.delete(id, e)}>Delete</button></del>
                        </li>
                    )
                    ) : null}
                </ul>
            </div>

        )
    }
}
