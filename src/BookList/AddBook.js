import React from "react";
import {Link} from "react-router-dom";

function AddBook() {
    return (
        <>
            <button>
                <Link to="/books">back</Link>
            </button>
            <h1>新增書本</h1>
        </>
    );
}

export default AddBook;