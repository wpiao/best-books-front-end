import React from 'react';
import superagent from 'superagent';
import { Container, Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND_URL}/books`
    superagent.get(url)
      .query({ email: this.props.userInfo.email })
      .then(res => {
        this.setState({ books: res.body });
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Container>
        <Carousel>
          {this.state.books.map(book =>
            <Carousel.Item key={book._id}>
              <img
                className="d-block w-100"
                src={book.photo}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{book.name}</h3>
                <p>{book.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </Container>
    );
  }
}

export default BestBooks;