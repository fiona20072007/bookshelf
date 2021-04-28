import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./scss/App.module.scss";
import Loading from "./Common/Loading";
const BookIndex = lazy(() => import("./BookIndex"));
const BookList = lazy(() => import("./BookList"));
const AddBook = lazy(() => import("./BookList/AddBook"));
const NoMatch = lazy(() => import("./NoMatch"));
const BookDetail = lazy(() => import("./BookList/BookDetail"));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Switch className={styles.app}>
				<Route exact path="/" component={BookIndex} />
				<Route exact path="/bookshelf" component={BookIndex} />
				<Route path="/books/:bookId" component={BookDetail} />
				<Route path="/books" component={BookList} />
				<Route path="/add" component={AddBook} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</Suspense>
	);
}

export default App;
