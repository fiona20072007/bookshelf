import React, {useState, useEffect} from "react";
import BookDetail from "./BookDetail"
import BookCard from "./BookCard";
import {Switch, Link, Route, useRouteMatch} from "react-router-dom";
import {getData} from "../util";
import {getBooksUrl} from "../constants";


const BookList = () => {
    let match = useRouteMatch();
    const [bookList, setBookList] = useState([])
    useEffect(() => {
        getData(getBooksUrl).then((res) => setBookList(res.data))
    },[])
    return (
        <>
            <Switch>
                <Route path={`${match.path}/:bookId`} component={BookDetail}/>
                <Route path={match.path}>
                    <div>
                        <div>
                            <h1>書本列表</h1>
                            <Link to="/add">+</Link>
                        </div>
                        {bookList.map(book =>
                            <BookCard book={book}/>
                        )}
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default BookList;
