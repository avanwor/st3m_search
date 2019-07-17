import React, { Component } from 'react';
import Search from './Search'
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
        e.preventDefault();
        this.setState({ input: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { input } = this.state;

        fetch(`http://localhost:3008/api?input=${input}`)
        .then(res => res.json())
        .then(({data,corrected}) => {
            //if the server autocorrects the input, put the corrected input into state
            let showing = corrected === input ? '' : corrected
            this.setState({
                gifs: data,
                showing: showing
            })
        })
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
