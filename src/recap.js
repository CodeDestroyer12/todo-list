import React, { Component } from 'react';
import Popup from './popup.js'

class Recap extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            list: [],
            showPopup: false,
            id: ''
        }
        // this.handleDelete = this.handleDelete.bind(this);
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
        // const newList = [];
        // newList.concat(this.state.text);
        if (this.state.text !== "") {


            this.setState({
                list: [...this.state.list, this.state.text],
                text: ''
            });
            // console.log(this.state);
        }
    }

    handleDelete = (id, e) => {
        //  e.preventdefault();
        //console.log(key);
        const arr = this.state.list;
        //console.log(arr);
        arr.splice(id, 1)
        this.setState({
            list: arr
        });
    }

    handleUpdate = (key) => {
        //console.log(key);
        if (key !== '') {
            const arr = this.state.list;
            arr[this.state.id] = key;
            this.setState({
                list: arr,
                showPopup: !this.state.showPopup,
                id: ''
            })
        }
    }


    render() {
        const { text, list ,id} = this.state;
        const arr =list;
        return (


            <div>

                {/* {text}<br/> */}

                <input type="text" onChange={this.handleChange} value={text} />
                <button onClick={this.handleSubmit}>Submit</button>

                <ul type='circle'>
                    {this.state.list.map((i, id) => (
                        <li key={id} className="text-dark">
                            {i}
                            <button onClick={e => this.handleDelete(id, e)}>Delete</button>
                            <button onClick={e => this.togglePopup(id, e)}>update</button>
                        </li>
                    )
                    )}
                </ul>
                
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