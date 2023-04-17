import React from 'react';

class App extends React.Component {
    state = {
        userName: 'John Doe'
    };

    componentDidMount() {
        this.setState({ userName: 'Jane Doe' });
    }

    render() {
        return (
            <div>
                {this.state.userName}
            </div>
        );
    }
}

export default App;