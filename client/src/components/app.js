import React, { Component } from 'react';
import Search from './Search'
import Key from './Key'
import Result from './Result'
import AutoCorrect from './AutoCorrect'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            gifs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange(e) {
        let val = e.target.value.toLowerCase();
        
        this.setState({ input: val });
    }

    handleSubmit() {
        let fixed = AutoCorrect(this.state.input)
        console.log(fixed)
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
