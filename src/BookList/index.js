import React from "react";

import BookDetail from "./BookDetail"
import { Switch,Link,Route,useRouteMatch,} from "react-router-dom";

function BookList() {
    let match = useRouteMatch();
    return (
        <div>
            <button>
                <Link to="/">back</Link>
            </button>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:bookId`}>
                    <BookDetail/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

export default BookList;
