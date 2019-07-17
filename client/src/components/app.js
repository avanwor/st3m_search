import React, { Component } from 'react';
import axios from 'axios'
import Search from './Search'
import key from '../../../key'
import Result from './Result'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            gifs: []
        }
    }

    componentDidMount() {
        this.setState({
            gifs: [{
                embed_url: "https://giphy.com/embed/ukZYbNQaVmdGjeLf6U",
                id: "ukZYbNQaVmdGjeLf6U"
            }]
        })
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    handleSubmit = () => {
        fetch(`http://localhost:3008/api?input=${this.state.input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //if data is falsy, generate a no results message
            this.setState({gifs: data})
        })
        //event.preventDefault();
    }

    render() {
        let { input, gifs } = this.state;
        return (
            <div className="container">
                <Search value={input} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Result results={gifs} />
            </div>
        )
    }
};


export default App;
