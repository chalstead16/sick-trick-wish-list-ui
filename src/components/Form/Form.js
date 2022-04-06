import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    render() {
        return (
            <form>
                <select name='stance'>
                    <option value=' '>Choose your Stance</option>
                    <option value={this.state.stance}>Regular</option>
                    <option value={this.state.stance}>Switch</option>
                </select>

                <input
                    type='text'
                    placeholder='Name of Trick'
                    name='name'
                    value={this.state.name}
                />

                <select id='obstacle'>
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
                />

                <button>Send it!</button>
            </form>
        )
    }
}

export default Form;