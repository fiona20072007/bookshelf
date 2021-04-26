import React from "react";

import {
    useParams
} from "react-router-dom";

function BookDetail() {
    let {bookId} = useParams();
    return <h3>Requested topic ID: {bookId}</h3>;
}

export default BookDetail