import React from 'react';



function Book() {

    

    return (
        <div className="card">
            <img src="book-cover.jpg" alt="Book Cover" />
            <div className="card-body">
                <h5 className="card-title">Book Title</h5>
                <p className="card-text">Author: John Doe</p>
                <p className="card-text">Genre: Fiction</p>
                <p className="card-text">Published: 2022</p>
            </div>
        </div>
    );
}


export default Book;
