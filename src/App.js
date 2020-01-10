import React, {Component} from 'react';
import './App.css';

class Body extends Component {
    constructor() {
        super();
        this.state = {
            buk: 0,
            as: 0
        }
    }

    componentDidMount() {
        fetch('https://script.google.com/macros/s/AKfycbyGZjGb1qaHJ6W4cfZE3lUJlMfwJC1fgapQqc56Bs_3NhOVohU/exec')
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({
                buk: data['BUK'].toFixed(2) + '%',
                as: data['AllStars'].toFixed(2) + '%',
            })
        })
    }

    render() {
        return (
            <div className="App">
                <div className="main-div buk-div">
                    <div className="image">
                        <div className="img-wrapper">
                            <img className="buk-img" src="buk.svg" alt=""/>
                        </div>
                    </div>

                    <ProgressBar width={this.state.buk} color="white"/>
                </div>

                <div className="main-div">
                    <div className="image">
                        <div className="img-wrapper">
                            <img src="allstars.svg" alt=""/>
                        </div>
                    </div>

                    <ProgressBar width={this.state.as} color="black"/>
                </div>
            </div>
        )
    }
}

function ProgressBar(props) {
    return (
        <div className="ps-div">
            <div className="progress-bar-wrapper">
                <div className="progress-bar" style={{width: props.width}}></div>
            </div>

            <div className={'ps-text ' + 'ps-text-' + props.color}>
                {props.width}
            </div>
        </div>
    )
}

function App() {
    return <Body/>
}

export default App;
