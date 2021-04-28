import axios from "axios";

function getData(path) {
	return axios.get(path);
}

function patchData(path, obj) {
	return axios.patch(path, obj);
}

function addData(path, obj) {
	return axios.post(path, obj);
}

function deleteData(path) {
	return axios.delete(path);
}

const handleAlert = (msg, method) => {
	method(msg);
	setTimeout(() => {
		method("");
	}, 1500);
};

export { getData, patchData, addData, deleteData, handleAlert };
