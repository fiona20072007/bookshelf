import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";
import {Link} from "react-router-dom";
import {getData} from "../util";
import {getBooksUrl} from "../constants";
import styles from "../scss/bookList.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


const BookList = () => {
    const [bookList, setBookList] = useState([])
    useEffect(() => {
        getData(getBooksUrl).then((res) => setBookList(res.data))
    }, [])
    return (
        <div className={styles.bookList}>
            <div className={styles.bookListHeader}>
                <h1>書本列表</h1>
                <Link to="/add"><FontAwesomeIcon icon={faPlus}/></Link>
            </div>
            <div className={styles.bookListBody}>
                {bookList.map((book, index) =>
                    <BookCard key={index} book={book}/>
                )}
            </div>
        </div>

    );
}

export default BookList;
