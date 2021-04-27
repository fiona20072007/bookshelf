import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {patchData} from "../util";
import {getBooksUrl} from "../constants";

const AddBook = (props) => {
    const bookId = props.match.params.bookId

    const [header, setHeader] = useState(props.bookTitle)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [desc, setDesc] = useState("")
    const [alert, setAlert] = useState("")

    useEffect(() => {
        setHeader(props.bookTitle)
    },[props.bookTitle])

    const handleClearInput = () => {
        setTitle("");
        setAuthor("");
        setDesc("");
        setAlert("");
    }

    const handleEditBook = () => {
        if (title === "") {
            setAlert("請填寫名稱")
            return
        }
        if (author === "") {
            setAlert("請填寫作者")
            return
        }
        const newBookDetail = {
            title, author, description: desc
        }
        patchData(getBooksUrl + bookId + "/", newBookDetail)
            .then(() => {
                setHeader(`${title}`)
                setTitle("");
                setAuthor("");
                setDesc("");
                setAlert("");
            })
            .catch(() => {
                console.log("修改失敗")
            })
    }

    return (
        <>
            <div>
                <button>
                    <Link to={`/books/${bookId}`}>back</Link>
                </button>
                <h1>{header}</h1>
            </div>

            <div>
                <div>
                    <input type="text" placeholder="名稱" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input type="text" placeholder="作者" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    <input type="text" placeholder="備註" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div>{alert}</div>
                <div>
                    <button onClick={handleClearInput}>取消</button>
                    <button onClick={handleEditBook}>修改</button>
                </div>
            </div>
        </>
    );
}

export default AddBook;