import React from "react";

class RandomNumber extends React.Component {
    state = { randomNumber: 0 }

    handleclick = () => {
        this.setState({
            randomNumber: Math.random()
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.randomNumber}</div>
                <button onClick={this.handleclick}>Generate</button>
            </div>
        );
    }
}

export default RandomNumber;