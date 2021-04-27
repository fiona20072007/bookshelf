import axios from "axios";

function getData(path){
    return axios.get(path)
}
function patchData(path, obj) {
    return axios.patch(path, obj)
}
function addData(path, obj) {
    return axios.post(path, obj)
}


export {
    getData, patchData, addData
}