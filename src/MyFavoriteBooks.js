import React from 'react';
import './MyFavoriteBooks.css';
import BestBooks from './BestBooks';
import { Button, Jumbotron } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import axios from 'axios';
import superagent from 'superagent';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      books: []
    };
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

  handleClick = () => {
    this.setState({
      isClicked: true
    });
  }

  addBook = book => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/books`, book)
      .then(res => {
        console.log(res.data.books);
        this.setState(res.data.books)
      })
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/books/${id}?email=${this.props.userInfo.email}`)
      .then(res => console.log(res));
  }

  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <Button onClick={this.handleClick} >Add Book</Button>
          {this.state.isClicked ? <BookFormModal email={this.props.userInfo.email} addBook={this.addBook} /> : ''}
        </Jumbotron>
        <BestBooks deleteBook={this.deleteBook} userInfo={this.props.userInfo} books={this.state.books} />
      </>
    )
  }
}

export default MyFavoriteBooks;
