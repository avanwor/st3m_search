import React, { Component } from 'react';
import Search from './Search'
import Result from './Result'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs: [],
            showing: '',
            clicked: ''
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

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const input = formData.get("input")
        console.log('input',input)
        fetch(`http://localhost:3008/api?input=${input}`)
        .then(res => res.json())
        .then(({data,corrected}) => {
            //if the server autocorrects the input, put the corrected input into state
            const showing = corrected === input ? '' : corrected
            this.setState({
                gifs: data,
                showing: showing
            })
        })
    }

    imgOnClick = (url) => {
        this.setState({ 
            clicked: url
        })
    }

    removeOverlay = () => {
        this.setState({ 
            clicked: ''
        })
    }

    render() {
        const { gifs, showing, clicked } = this.state;
        return (
            <div className="container">
                <Search handleSubmit={this.handleSubmit}/>
                <Result gifs={gifs} imgOnClick={this.imgOnClick} showing={showing} clicked={clicked} removeOverlay={this.removeOverlay}/>
            </div>
        )
    }
};


export default App;
