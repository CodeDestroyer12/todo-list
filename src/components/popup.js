import React from 'react';
import '../style.css';

export default class Popup extends React.Component {
    state = {
        text1: ''
    }
    handleChange = (event) => {
        this.setState({
            text1: event.target.value
        })
    }

    sendData = () => {
        this.props.parentCallback(this.state.text1);
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h4>Update your todo list</h4>
                    <input type="text" onChange={this.handleChange} defaultValue={this.props.text} ></input><br />
                    <button onClick={this.sendData}>Update</button>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}  