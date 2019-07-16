import React, { Component } from 'react';
import Search from './Search'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        //make api call
    }

    handleChange(e) {
        let val = e.target.value.toLowerCase();
        
        this.setState({ input: val });
      }

    render() {
        let { input } = this.state;
        return (
            <div className="container">
                <Search value={input} handleChange={this.handleChange} />
            </div>
        )
    }
};


export default App;
