import React, { Component } from 'react'
import BookList from './components/BookList';

export default class App extends Component {
  render() {
    return (
      <div className='main'>
        <h1>Jacksons reading list</h1>
        <BookList />
      </div>
    )
  }
}
