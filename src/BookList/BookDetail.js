import React, {useState, useEffect, useCallback} from "react";
import InputField from "../Common/InputField";
import {Link, useParams} from "react-router-dom";
import {getData, patchData} from "../util";
import {getBooksUrl} from "../constants";
import styles from "../scss/bookDetail.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faEdit} from '@fortawesome/free-solid-svg-icons';

const BookDetail = () => {
    let {bookId} = useParams();
    const [bookDetail, setBookDetail] = useState("");
    const [header, setHeader] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [desc, setDesc] = useState("");
    const [alert, setAlert] = useState("");

    useEffect(() => {
        getData(getBooksUrl + bookId).then((res) => {
            setBookDetail(res.data);
            setHeader(res.data.title);
        })
    }, [])

    const [isEditable, setIsEditable] = useState(false)
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
            setAlert("請填寫名稱");
            return
        }
        if (author === "") {
            setAlert("請填寫作者");
            return
        }
        if (desc === "") {
            setAlert("請填寫備註");
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
            })
            .catch(() => {
                console.log("修改失敗");
            })
    }


    return (
        <>
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
                    <div className={styles.alert}>{alert}</div>
                    <div className={styles.btn}>
                        <button onClick={handleClearInput}>取消</button>
                        <button onClick={handleEditBook}>修改</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(BookDetail);