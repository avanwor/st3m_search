import React, { Component } from 'react';
import Search from './Search'
import Key from './Key'
import Result from './Result'
import { get } from 'http';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            gifs: []
        }
    }

    componentDidMount() {
        //probably just fetch latest popular search terms here, 200 of them?
        fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${Key}&limit=1`,{})
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    gifs: res.data
                })
            })
            .then(() => console.log('post state', this.state.gifs))
            //++catch some errors!!! (try with invalid API key)
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    handleSubmit = () => {
        //remove non-letter characters. Though most autocorrect is happening on server, this function isn't resource intensive, and helps block code injections. 
        let lettersOnly = this.state.input.toLowerCase().replace(/[^a-z]/gi, '')
        //++should spaces be included in search?

        fetch(`http://localhost:3008/api?input=${lettersOnly}`)
        .then(res => res.json())
        .then(data => console.log(data))

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
