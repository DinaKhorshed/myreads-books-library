import React from "react";

const Book = (props) => {
  const { id, imageLinks, title, authors, shelf } = props.book;

  return (
    <li>
      <div className="book">
        <div className="book-wrapper">
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${imageLinks?.thumbnail || imageLinks?.smallThumbnail})`,
            }}
          >{!imageLinks ? "No Preview Available" : ''} </div>
          <div className="update-book-shelf">
            <select
              defaultValue={shelf}
              onClick={(evt) => props.onSelectChange(evt, id)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          | {authors?.map((author) => `${author} | `)}
        </div>
      </div>
    </li>
  );
};

export default Book;
