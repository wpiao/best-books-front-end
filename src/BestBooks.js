import React from 'react';
// import superagent from 'superagent';
import { Container, Carousel, Button } from 'react-bootstrap';

class BestBooks extends React.Component {

  handleClick = e => {
    console.log(e.target);
  }
  render() {
    return (
      <Container>
        <Carousel>
          {this.props.books.map(book =>
            <Carousel.Item key={book._id}>
              <img
                className="d-block w-100"
                src={book.photo}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <Button variant="danger" onClick={() => this.props.deleteBook(book._id)} >Delete</Button>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </Container>
    );
  }
}

export default BestBooks;