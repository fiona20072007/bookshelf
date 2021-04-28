import React, {useState} from "react";
import {Link} from "react-router-dom";
import {addData, handleAlert} from "../util";
import {getBooksUrl} from "../constants";
import InputField from "../Common/InputField";
import styles from "../scss/bookDetail.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import successImg from '../image/success.jpg';
import failImg from '../image/fail.png';

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
            handleAlert("請填寫名稱", setAlert)
            return
        }
        if (author === "") {
            handleAlert("請填寫作者", setAlert)
            return
        }
        if (desc === "") {
            handleAlert("請填寫備註", setAlert)
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
                handleAlert("新增成功", setAlert)
            })
            .catch(() => {
                handleAlert("新增失敗", setAlert)
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
                    <div className={styles.btn}>
                        <button onClick={handleClearInput}>取消</button>
                        <button onClick={handleAddBook}>新增</button>
                    </div>
                </div>
            </div>
            {alert !== "" && (
                <>
                    <div className={alert !== "新增失敗" && alert !== "新增成功" ? styles.alertMsg : styles.noAlertMsg}>
                        <img src={failImg} alt="alert"/>
                        {alert}
                    </div>
                    <div className={alert === "新增成功" ? styles.successMsg : styles.noAlertMsg}>
                        <img src={successImg} alt="success"/>
                        新增成功
                    </div>
                    <div className={alert === "新增失敗" ? styles.failMsg : styles.noAlertMsg}>
                        <img src={failImg} alt="fail"/>
                        修改失敗
                    </div>
                </>
            )}
        </>
    );
}

export default AddBook;