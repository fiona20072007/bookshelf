import React, {useState, useEffect} from "react";
import InputField from "../Common/InputField";
import {Link, useParams, useHistory} from "react-router-dom";
import {getData, patchData, deleteData, handleAlert} from "../util";
import {getBooksUrl} from "../constants";
import styles from "../scss/bookDetail.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faEdit} from '@fortawesome/free-solid-svg-icons';
import Loading from "../Common/Loading";
import successImg from '../image/success.jpg';
import failImg from '../image/fail.png';

const BookDetail = () => {
    let {bookId} = useParams();
    let history = useHistory();
    const [bookDetail, setBookDetail] = useState("");
    const [header, setHeader] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [desc, setDesc] = useState("");
    const [alert, setAlert] = useState("");
    const [isEditable, setIsEditable] = useState(false);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getData(getBooksUrl + bookId).then((res) => {
            setBookDetail(res.data);
            setHeader(res.data.title);
            setLoad(false);
        })
    }, [])

    const handleEdit = () => {
        setIsEditable((pre) => !pre);
    }

    const handleClearInput = () => {
        setTitle("");
        setAuthor("");
        setDesc("");
        setAlert("");
        setIsEditable((pre) => !pre);
    }

    const handleEditBook = () => {
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
        const editBookDetail = {
            title, author, description: desc
        }
        patchData(getBooksUrl + bookId + "/", editBookDetail)
            .then((res) => {
                setBookDetail(res.data);
                setHeader(`${title}`);
                setTitle("");
                setAuthor("");
                setDesc("");
                setAlert("");
                handleAlert("修改成功", setAlert)
            })
            .catch(() => {
                handleAlert("修改失敗", setAlert)
            })
    }
    const handleDeleteBook = () => {
        deleteData(getBooksUrl + bookId + "/")
            .then(() => {
                history.push("/books");
            })
            .catch(() => {
                handleAlert("刪除失敗", setAlert)
            })
    }


    return (
        <>
            {load === true && <Loading />}
            <div className={styles.bookDetailHeader}>
                <Link to={isEditable ? `/books/${bookId}` : "/books"} onClick={isEditable ? handleClearInput : null}
                      className={styles.backIcon}><FontAwesomeIcon icon={faChevronLeft}/></Link>
                <h1>{header}</h1>
                <a onClick={handleEdit} className={isEditable ? styles.hide : styles.editIcon}><FontAwesomeIcon
                    icon={faEdit}/></a>
            </div>
            <div className={styles.bookDetailBody}>
                <div className={styles.bookDetailInputAll}>
                    <InputField title={"名稱"} editable={isEditable} value={bookDetail.title} method={setTitle}
                                inputValue={title}/>
                    <InputField title={"作者"} editable={isEditable} value={bookDetail.author} method={setAuthor}
                                inputValue={author}/>
                    <InputField title={"備註"} editable={isEditable} value={bookDetail.description} method={setDesc}
                                inputValue={desc}/>
                </div>
                <div className={isEditable ? styles.bookDetailEditAll : styles.hide}>
                    <div className={styles.btn}>
                        <button onClick={handleClearInput}>取消</button>
                        <button onClick={handleDeleteBook}>刪除</button>
                        <button onClick={handleEditBook}>修改</button>
                    </div>
                </div>
            </div>
            {alert !== "" && (
                <>
                    <div className={alert !== "修改失敗" && alert !== "修改成功" && alert !== "刪除失敗" ? styles.alertMsg : styles.noAlertMsg}>
                        <img src={failImg} alt="alert"/>
                        {alert}
                    </div>
                    <div className={alert === "修改成功" ? styles.successMsg : styles.noAlertMsg}>
                        <img src={successImg} alt="success"/>
                        {alert}
                    </div>
                    <div className={alert === "修改失敗" || alert === "刪除失敗"  ? styles.failMsg : styles.noAlertMsg}>
                        <img src={failImg} alt="fail"/>
                        {alert}
                    </div>
                </>
            )}
        </>
    );
}

export default React.memo(BookDetail);