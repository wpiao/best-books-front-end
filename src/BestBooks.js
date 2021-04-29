import React from 'react';
import superagent from 'superagent';

class BestBooks extends React.Component {

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND_URL}/books`
    console.log(url);
    superagent.get(url)
      .query({ email: this.props.userInfo.email })
      .then(res => console.log(res));
  }

  render() {
    return (
      <>
        <h1>Hello world</h1>
      </>
    );
  }
}

export default BestBooks;