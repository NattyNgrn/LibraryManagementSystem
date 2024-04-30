
import { useState, useEffect } from "react";
import Popup from "./popup";
import Card from "./card";

function Catalogue() {

    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupBook, setPopupBook] = useState({});

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
                {data.map(
                    book => <Card book={book} setPopupBook={setPopupBook} setShowPopup={setShowPopup}/>
                )}
            </div>
        }
        </div>
    );
}

export default Catalogue;
