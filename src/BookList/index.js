import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";
import {Link} from "react-router-dom";
import {getData} from "../util";
import {getBooksUrl} from "../constants";


const BookList = () => {
    const [bookList, setBookList] = useState([])
    useEffect(() => {
        getData(getBooksUrl).then((res) => setBookList(res.data))
    }, [])
    return (
        <>
            <div>
                <div>
                    <h1>書本列表</h1>
                    <Link to="/add">+</Link>
                </div>
                <div>
                    {bookList.map((book, index) =>
                        <BookCard key={index} book={book}/>
                    )}
                </div>
            </div>
        </>
    );
}

export default BookList;
