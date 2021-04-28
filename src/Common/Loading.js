import styles from "../scss/loading.module.scss";

const Loading = () => {
	return (
		<div className={styles.loading} id="loading">
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
			<div className={styles.dot}></div>
		</div>
	);
};

export default Loading;
