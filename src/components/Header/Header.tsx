import styles from "./Header.module.css";
import { Logo, NavBar } from "../index";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={`${styles.headerContent} container`}>
				<Logo />
				<NavBar />
			</div>
		</header>
	);
};
