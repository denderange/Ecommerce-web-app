import styles from "./Header.module.css";
import { Logo, NavBar } from "../index";

type Props = {
	firstName: string | undefined;
	lastName: string | undefined;
};

export const Header = ({ firstName, lastName }: Props) => {
	return (
		<header className={styles.header}>
			<div className={`${styles.headerContent} container`}>
				<Logo />
				<NavBar
					firstName={firstName}
					lastName={lastName}
				/>
			</div>
		</header>
	);
};
