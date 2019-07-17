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
            gifs: [],
            showing: '',
        }
    }

    componentDidMount() {
        //after loading initial page, load a gif to help user find search bar
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
        //can i destructure here? {data,corrected}
        .then(data => {
            console.log('data from server', data)
            //if data is falsy, generate a no results message
            let showing = data.corrected === this.state.input ? '' : data.corrected
            this.setState({
                gifs: data.data,
                showing: showing
            })
        })
        .then(console.log('state after submit', this.state.gifs))
        //event.preventDefault();
    }

    render() {
        let { input, gifs, showing } = this.state;
        return (
            <div className="container">
                <Search value={input} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Result gifs={gifs} showing={showing}/>
            </div>
        )
    }
};


export default App;
