import React from "react";
import BookList from "./BookList"
import BookIndex from './BookIndex'
import {
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={BookIndex}/>
            <Route path="/books" component={BookList}/>
        </Switch>
    );
}

export default App;
