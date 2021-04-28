import React from "react"
import styles from "../scss/inputField.module.scss"

const InputField = ({title, editable, value, method, inputValue}) => {
    if (editable && title !== "備註") {
        return <input className={styles.inputField} type="text" placeholder={title} value={inputValue}
                      onChange={(e) => method(e.target.value)}/>
    } else if (editable && title === "備註") {
        return <textarea className={styles.inputArea} placeholder={title} value={inputValue}
                         onChange={(e) => method(e.target.value)}/>
    } else {
        return <div className={styles.fixField}>{title}: {value}</div>
    }
}

export default InputField