import React from "react"

const InputField = ({title, editable, value, method, inputValue}) => {
    if(editable) {
        return <input type="text" placeholder={title} value={inputValue} onChange={(e) => method(e.target.value)} />
    } else {
        return <div>{title}: {value}</div>
    }
}

export default InputField