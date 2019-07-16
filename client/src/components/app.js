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
        this.handleChange = this.handleChange.bind(this);
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

    render() {
        let { input, gifs } = this.state;
        return (
            <div className="container">
                <Search value={input} handleChange={this.handleChange} />
                <Result results={gifs} />
            </div>
        )
    }
};


export default App;
