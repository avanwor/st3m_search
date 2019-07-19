import React from 'react';
import Search from './Search'
import Result from './Result'
import ErrorBoundary from './Error'

class App extends React.Component {
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
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //take in form data from Search
        const formData = new FormData(e.target);
        const input = formData.get("input").toLowerCase();
        
        //send request to server with user input
        fetch(`http://localhost:3008/api?input=${input}`,{})
        //fetch(`https://www.datasy.io/api?input=${input}`,{})
        .then(res => res.json())
        .then(({data,corrected}) => {
            //if the server autocorrects the input, put the corrected input into state
            const showing = corrected === input ? '' : corrected
            this.setState({
                gifs: data,
                showing: showing
            });
        });
        .catch(err => console.log(err))
    }

    //if an image is clicked, send that images embeded url to state
    imgOnClick = (url) => {
        this.setState({ clicked: url });
    }

    //if an the overlay is clicked, send a blank string to state to return back to main results
    removeOverlay = () => {
        this.setState({ clicked: ''});
    }

    render() {
        const { gifs, showing, clicked } = this.state;
        return (
            <ErrorBoundary>
                <div className="container">
                    <Search handleSubmit={this.handleSubmit}/>
                    <Result gifs={gifs} imgOnClick={this.imgOnClick} showing={showing} clicked={clicked} removeOverlay={this.removeOverlay}/>
                </div>
            </ErrorBoundary>
        );
    }
}


export default App;
