import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { Logo } from "../index";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footerContent} container`}>
				<Logo />

				<ul className={styles.footerLinksList}>
					<li>
						<Link to='/#CATALOG'>Catalog</Link>
					</li>
					<li>
						<Link to='/#FAQ'>FAQ</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};
