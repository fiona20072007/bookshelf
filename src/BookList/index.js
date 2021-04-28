import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import Loading from "../Common/Loading";
import { Link } from "react-router-dom";
import { getData } from "../util";
import { getBooksUrl } from "../constants";
import styles from "../scss/bookList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const BookList = () => {
	const [bookList, setBookList] = useState([]);
	const [load, setLoad] = useState(true);

	useEffect(() => {
		getData(getBooksUrl).then((res) => {
			setBookList(res.data);
			setLoad(false);
		});
	}, []);
	return (
		<div className={styles.bookList}>
			{load === true && <Loading />}
			<div className={styles.bookListHeader}>
				<h1>書本列表</h1>
				<Link to="/add">
					<FontAwesomeIcon icon={faPlus} />
				</Link>
			</div>
			<div className={styles.bookListBody}>
				{bookList.map((book, index) => (
					<BookCard key={index} book={book} />
				))}
			</div>
		</div>
	);
};

export default BookList;
