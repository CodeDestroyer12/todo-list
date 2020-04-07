import React, { Component } from 'react';
import Popup from './popup.js';
import Complete from './Complete';
import All from './All';
import Ongoing from './Ongoing'


class Recap extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            list: [],
            showPopup: false,
            id: '',
            complete: [],
            showAll: true,
            showComplete: false,
            showOngoing: false
        }
    }

    togglePopup = (id) => {
        this.setState({
            showPopup: !this.state.showPopup,
            id: id
        });
    }


    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = () => {
        if (this.state.text !== "") {
            this.setState({
                list: [...this.state.list, this.state.text],
                text: ''
            });

        }
    }

    handleDelete = (id, e) => {
        const arr = this.state.list;
        arr.splice(id, 1)
        this.setState({
            list: arr
        });
    }

    handleUpdate = (Updated) => {
        if (Updated !== '') {
            const arr = this.state.list;
            arr[this.state.id] = Updated;
            this.setState({
                list: arr,
                showPopup: !this.state.showPopup,
                id: ''
            })
        }
    }
    handleComplete = (id) => {
        const arr = this.state.list;
        const ar = arr[id]
        arr.splice(id, 1)
        this.setState({
            list: arr,
            complete: [...this.state.complete, ar]
        });
    }
    delComplete = (id) => {
        const arr = this.state.complete;
        arr.splice(id, 1);
        this.setState({
            complete: arr
        })
    }

    showAll = () => {
        this.setState({
            showAll: true,
            showOngoing: false,
            showComplete: false
        })
    }
    showComplete = () => {
        this.setState({
            showAll: false,
            showOngoing: false,
            showComplete: true
        })

    }
    showOngoing = () => {
        this.setState({
            showAll: false,
            showOngoing: true,
            showComplete: false
        })

    }




    render() {
        const { text, list, id, complete } = this.state;
        const arr = list;
        return (


            <div className="text-center">
                <input type="text" className="form-control" onChange={this.handleChange} value={text} placeholder="Enter Your memo" />
                <button className="btn btn-outline-primary " onClick={this.handleSubmit}>Submit</button>
                <br />


                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <button className="nav-link active" onClick={this.showAll}>All</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={this.showOngoing}>Ongoing</button>

                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={this.showComplete}>Complete</button>

                            </li>
                        </ul>
                    </div>

                    {this.state.list.length === 0
                        ?
                        <div className="card-body">No remainingTasks </div>
                        :
                        <div className="card-body">


                            {this.state.showAll ? <All list={list}
                                handleDelete={this.handleDelete}
                                togglePopup={this.togglePopup}
                                handleComplete={this.handleComplete}
                                task={complete}
                                delete={this.delComplete}
                            /> : null}

                            {this.state.showOngoing ? <Ongoing list={list}
                                handleDelete={this.handleDelete}
                                togglePopup={this.togglePopup}
                                handleComplete={this.handleComplete} /> : null}

                            {this.state.showComplete ? <Complete
                                task={complete}
                                delete={this.delComplete} /> : null}
                        </div>
                    }
                </div>


                {this.state.showPopup ?
                    <Popup
                        text={arr[id]}
                        parentCallback={this.handleUpdate}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }


}
export default Recap;