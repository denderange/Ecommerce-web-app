import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/404-page-not-found.svg?react";

export const NotFound = () => {
	return (
		<div className='container'>
			{/* <ImageNotFoundPage className={styles.image404} /> */}
			<NotFoundImage className={styles.image404} />
			<Link
				to='/'
				className={`buttonLink ${styles.linkHomePage}`}>
				Home page
			</Link>
		</div>
	);
};
