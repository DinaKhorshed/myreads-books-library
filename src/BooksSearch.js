import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

const BooksSearch = (props) => {
  return (
    <div className="search-books">
      <div className="searchbar">
        <Link to="/" className="close-search" onClick={props.closeSearch}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={(evt) => props.search(evt)}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.books?.map((book) => (
            <Book
              key={book.id}
              book={book}
              onSelectChange={props.onSelectChange}
            />
          ))}
        </ol>
        <div>{props.books.length <= 0 ? "No Results Found" : ""}</div>
      </div>
    </div>
  );
};
BooksSearch.propTypes = {
  books: PropTypes.array.isRequired,
  closeSearch: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};
export default BooksSearch;
