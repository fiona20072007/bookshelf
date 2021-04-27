import React from "react";
import styles from "../scss/bookCard.module.scss"
import {Link, useRouteMatch} from "react-router-dom";

const BookCard = ({book}) => {
    let match = useRouteMatch();
    return (
        <div className={styles.bookCard}>
            <Link to={`${match.url}/${book.id}`} className={styles.bookCardDetail}>
                <p>{book.title}</p>
                <p>{book.author}</p>
            </Link>
        </div>
    );
}

export default BookCard