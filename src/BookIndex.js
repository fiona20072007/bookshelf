import { Link } from "react-router-dom";
import styles from "./scss/bookIndex.module.scss";

const BookIndex = () => {
	return (
		<div className={styles.bookIndex}>
			<Link to="/books">See All Books in Bookshelf</Link>
		</div>
	);
};

export default BookIndex;
