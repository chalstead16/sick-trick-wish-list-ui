import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }

    submitTrick = event => {
        event.preventDefault();
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTrick(newTrick);
    }

    clearInputs = () => {
        this.setState({ stance: '', name: '', obstacle: '', tutorial: '' });
    }

    render() {
        return (
            <form>
                <select 
                    name='stance' 
                    onChange={event => this.handleChange(event)}>
                    <option value=' '>Choose your Stance</option>
                    <option value={this.state.stance}>Regular</option>
                    <option value={this.state.stance}>Switch</option>
                </select>

                <input
                    type='text'
                    placeholder='Name of Trick'
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />

                <select 
                    name='obstacle'
                    onChange={event => this.handleChange(event)}>
                    <option value=' '>Choose your Obstacle</option>
                    <option value={this.state.obstacle}>Flatground</option>
                    <option value={this.state.obstacle}>Ledge</option>
                    <option value={this.state.obstacle}>Rail</option>
                    <option value={this.state.obstacle}>Stairs</option>
                    <option value={this.state.obstacle}>Pool</option> 
                </select>

                <input
                    type='text'
                    placeholder='Tutorial'
                    name='tutorial'
                    value={this.state.tutorial}
                    onChange={event => this.handleChange(event)}
                />

                <button onClick={event => this.submitTrick(event)}>Send it!</button>
            </form>
        )
    }
}

export default Form;