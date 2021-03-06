import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
const BookShelves = (props) => {
  const showTitle = props.books.some(
    (book) => book.shelf === props.shelf.shelfKey
  );
  return (
    <div className="bookshelf">
      {showTitle ? (
        <h2 className="bookshelf-title">{props.shelf.shelfTitle}</h2>
      ) : (
        ""
      )}
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books
            .filter((book) => book.shelf === props.shelf.shelfKey)
            .map((book) => (
              <Book
                key={book.id}
                book={book}
                onSelectChange={props.onSelectChange}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};
BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  shelf: PropTypes.object.isRequired,
};
export default BookShelves;
