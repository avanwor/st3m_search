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
        //beginning, maybe just pull a gif related to searching? 'search and you will find'
        //probably just fetch latest popular search terms here, 200 of them?
        // axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${key.key}&limit=2`)
        //     .then((res) => {
        //         this.setState({
        //             gifs: res.data.data
        //         })
        //     })
        //     .then(() => console.log('component mounted state', this.state.gifs))
        //     //++catch some errors!!! (try with invalid API key)

        this.setState({
            gifs: [{
                embed_url: "https://giphy.com/embed/ukZYbNQaVmdGjeLf6U",
                id: "ukZYbNQaVmdGjeLf6U"
            }]
        })

            //<iframe src="https://giphy.com/embed/ukZYbNQaVmdGjeLf6U" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nbpa-nba-players-association-pa-ukZYbNQaVmdGjeLf6U">via GIPHY</a></p>
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
