import React, {useState} from "react";
import {Link} from "react-router-dom";
import {addData} from "../util";
import {getBooksUrl} from "../constants";

const AddBook = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [desc, setDesc] = useState("")
    const [alert, setAlert] = useState("")

    const handleClearInput = () => {
        setTitle("");
        setAuthor("");
        setDesc("");
        setAlert("");
    }

    const handleAddBook = () => {
        if(title === "") {
            setAlert("請填寫名稱")
            return
        }
        if(author === "") {
            setAlert("請填寫作者")
            return
        }
        const addBookDetail = {
            title, author, description: desc
        }
        addData(getBooksUrl, addBookDetail)
            .then(() => {
                setTitle("");
                setAuthor("");
                setDesc("");
                setAlert("");
            })
            .catch(() => {
                console.log("新增失敗")
            })
    }

    return (
        <>
            <div>
                <button>
                    <Link to="/books">back</Link>
                </button>
                <h1>新增書本</h1>
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
                    <button onClick={handleAddBook}>新增</button>
                </div>
            </div>
        </>
    );
}

export default AddBook;