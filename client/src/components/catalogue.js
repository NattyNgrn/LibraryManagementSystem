
import { useState, useEffect } from "react";
import Popup from "./popup";

function Catalogue() {

    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupBook, setPopupBook] = useState({});
    console.log(data);
    useEffect(() => {
        fetch('http://localhost:8888/books')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
        {showPopup
            ? <Popup book={popupBook} setShowPopup={setShowPopup} />
            : <div className="grid">
                {data.map(book => (
                    <div className="card" key={book.id} onClick={() => setPopupBook(false)}>
                        <img className="card-img-top" src={book.img} alt={book.title} />
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">Author: {book.author}</p>
                            <p className="card-text">Year: {book.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        }
        </div>
    );
}

export default Catalogue;


