import React from 'react'
class App extends React.Component {
    state = {
        username: "John Doe",
    }

        componentDidMount() {
            this.setState({
                username: "Jane Doe"
            })
 }

    render() {
		return <div>{this.state.username}</div>
	}
}
export default App;




// import React, { Component } from 'react'
// import PropTypes from 'prop-types'



