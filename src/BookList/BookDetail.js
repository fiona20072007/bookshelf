import React, {useState, useEffect} from "react";
import EditBook from "./EditBook";
import {Switch, Link, Route, useRouteMatch, useParams} from "react-router-dom";
import {getData} from "../util";
import {getBooksUrl} from "../constants";

const BookDetail = () => {
    let {bookId} = useParams();
    let match = useRouteMatch();
    const [bookDetail, setBookDetail] = useState('')

    useEffect(() => {
        getData(getBooksUrl + bookId).then((res) => {
            setBookDetail(res.data)
        })
    }, [])

    return (
        <>
            <Switch>
                <Route path={`${match.path}/edit`} render={(props) => <EditBook bookTitle={bookDetail.title} {...props} />} />
                <Route path={match.path}>
                    <div>
                        <button>
                            <Link to="/books">back</Link>
                        </button>
                        <h1>{bookDetail.title}</h1>
                        <Link to={`${match.url}/edit`}>edit</Link>
                    </div>
                    <div>
                        <div>名稱：{bookDetail.title}</div>
                        <div>作者：{bookDetail.author}</div>
                        <div>備註：{bookDetail.description}</div>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default BookDetail