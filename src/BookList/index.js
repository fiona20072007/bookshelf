import React from "react";
import BookDetail from "./BookDetail"
import {Switch, Link, Route, useRouteMatch} from "react-router-dom";
import BookCard from "./BookCard";

function BookList() {
    let match = useRouteMatch();
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
                        <BookCard/>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default BookList;
