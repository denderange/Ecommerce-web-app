import { APP_TITLE } from "../../constants/appTitle";
import styles from "./Logo.module.css";

export const Logo = () => {
	return <div className={styles.logo}>{APP_TITLE}</div>;
};
