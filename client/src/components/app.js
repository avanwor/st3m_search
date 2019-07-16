import React, { Component } from 'react';
import Search from './Search'
import Key from './Key'
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
        fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${Key}&limit=10`,{})
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    gifs: res.data
                })
            })
            .then(() => console.log('post state', this.state.gifs))
            //catch some errors!!! (try with invalid API key)
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    handleSubmit = () => {
        //remove non-letter characters. Though most autocorrect is happening on server, this function isn't resource intensive, and helps block code injections. 
        let lettersOnly = this.state.input.toLowerCase().replace(/[^a-z]/gi, '')
        console.log(lettersOnly)
        //make post request to server with letters only
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
