import styles from "./scss/noMatch.module.scss";

function NoMatch() {
	return (
		<div className={styles.noMatchBody}>
			<div title="404" className={styles.noMatch}>
				404
			</div>
		</div>
	);
}

export default NoMatch;
