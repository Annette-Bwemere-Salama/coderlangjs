import React, { Component } from 'react'
// import React from 'react';

class App extends React.Component {
    state = {
        username: "",
    }

    componentDidMount() {
        handleCountIncrement = () => {
		this.setState({ username: this.state.username = "John Doe" });
	}
    }

        handleCountIncrement = () => {
		this.setState({ username: this.state.username = "John Doe" });
	}

    render() {
		return <div>{this.state.username}</div>
	}
}
export default App;




// import React, { Component } from 'react'
// import PropTypes from 'prop-types'



