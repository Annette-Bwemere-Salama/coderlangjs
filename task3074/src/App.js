import React from 'react';
import getUserData from "./getUserData";

class App extends React.Component {
  state = {
    userData: null,
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await getUserData();
      this.setState({ userData: res });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { userData, loading } = this.state;

    return (
      <div>
        User name: {userData?.name}
      </div>
    );
  }
}

export default App;
