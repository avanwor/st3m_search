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
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const input = formData.get("input").toLowerCase()
        
        fetch(`http://ec2-34-232-62-196.compute-1.amazonaws.com:3008/api?input=${input}`,{ mode: 'no-cors' })
        //fetch(`http://localhost:3008/api?input=${input}`,{ mode: 'no-cors' })
        .then(res => res.json())
        .then(({data,corrected}) => {
            //if the server autocorrects the input, put the corrected input into state
            console.log(data,corrected)
            const showing = corrected === input ? '' : corrected
            this.setState({
                gifs: data,
                showing: showing
            })
        })
        .catch(err => console.log(err))
    }

    imgOnClick = (url) => {
        this.setState({ clicked: url })
    }

    removeOverlay = () => {
        this.setState({ clicked: ''})
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
        )
    }
};


export default App;
