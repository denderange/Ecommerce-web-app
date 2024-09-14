import { Link } from "react-router-dom";
import { APP_TITLE } from "../../constants/appTitle";
import styles from "./Logo.module.css";

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<Link to='/'>{APP_TITLE}</Link>
		</div>
	);
};
