import React from 'react';

export const data = {
  1: {
    title: "This is page 1",
    description: "We will talk about page 1 content"
  },
  2: {
    title: "This is page 2",
    description: "We will talk about page 2 content"
  },
  3: {
    title: "This is page 3",
    description: "We will talk about page 3 content"
  }
}

class App extends React.Component {
  state = {
    page: 1,
    currentPageData: data[1]
  };

  handlePageChange = (page) => () => {
    this.setState({ page });
  };

  render() {
    const { currentPageData } = this.state;
    return (
      <div>
        <h2>{currentPageData.title}</h2>
        <p>{currentPageData.description}</p>
        <div>
          <button onClick={this.handlePageChange(1)}>Page 1</button>
          <button onClick={this.handlePageChange(2)}>Page 2</button>
          <button onClick={this.handlePageChange(3)}>Page 3</button>
        </div>
      </div>
    );
  }
}
export default App;
