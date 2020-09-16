import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class ChangeColorApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  text: 'black' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();


    }

    render() {
        return (
            <div>
                <h3>Change Color</h3>
                <ColorCircle color={this.state.text} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-color">
                        What color do you want?
                    </label>
                    <input
                        id="new-color"
                        defaultValue=""
                        ref={this.input}
                    />
                    <button>
                        Change
                    </button>
                </form>
            </div>
        );
    }



    handleSubmit(e) {
        e.preventDefault();
        this.setState(state => ({
            text: this.input.current.value,

        }));


    }
}

class ColorCircle extends React.Component {
    render() {
        const circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.color,
            borderRadius: "50%",
            width: 50,
            height: 50,
        };
        return (
            <div style={circleStyle}>
            </div>
                );
        }

}

ReactDOM.render(
    <React.StrictMode>
        <ChangeColorApp />,
    </React.StrictMode>,
    document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
