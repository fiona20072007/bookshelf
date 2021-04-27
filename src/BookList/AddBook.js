import React, {useState} from "react";
import {Link} from "react-router-dom";
import {addData} from "../util";
import {getBooksUrl} from "../constants";
import InputField from "../Common/InputField";
import styles from "../scss/bookDetail.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

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
        if (title === "") {
            setAlert("請填寫名稱")
            return
        }
        if (author === "") {
            setAlert("請填寫作者")
            return
        }
        if (desc === "") {
            setAlert("請填寫備註")
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
            <div className={styles.addBookHeader}>
                <Link to="/books"><FontAwesomeIcon icon={faChevronLeft} className={styles.back}/></Link>
                <h1>新增書本</h1>
            </div>
            <div className={styles.addBookBody}>
                <div className={styles.addBookInputAll}>
                    <InputField title={"名稱"} editable={true} method={setTitle} inputValue={title}/>
                    <InputField title={"作者"} editable={true} method={setAuthor} inputValue={author}/>
                    <InputField title={"備註"} editable={true} method={setDesc} inputValue={desc}/>
                </div>
                <div className={styles.addBookEditAll}>
                    <div className={styles.alert}>{alert}</div>
                    <div className={styles.btn}>
                        <button onClick={handleClearInput}>取消</button>
                        <button onClick={handleAddBook}>新增</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddBook;