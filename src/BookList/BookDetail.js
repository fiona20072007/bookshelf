import React from "react";
import EditBook from "./EditBook";
import {Switch, Link, Route, useRouteMatch, useParams} from "react-router-dom";

function BookDetail() {
    let {bookId} = useParams();
    let match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={`${match.path}/edit`} component={EditBook}/>
                <Route path={match.path}>
                    <button>
                        <Link to="/books">back</Link>
                    </button>
                    <h3>Requested topic ID: {bookId}</h3>
                    <Link to={`${match.url}/edit`}>edit</Link>
                </Route>
            </Switch>
        </>
    );
}

export default BookDetail