import React from "react";
import BookIndex from './BookIndex'
import BookList from "./BookList"
import AddBook from "./BookList/AddBook";
import NoMatch from "./NoMatch"
import {Switch, Route} from "react-router-dom";
import BookDetail from "./BookList/BookDetail";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={BookIndex}/>
            <Route path="/books/:bookId" component={BookDetail}/>
            <Route path="/books" component={BookList}/>
            <Route path="/add" component={AddBook}/>
            <Route path="*" component={NoMatch}/>
        </Switch>
    );
}

export default App;
