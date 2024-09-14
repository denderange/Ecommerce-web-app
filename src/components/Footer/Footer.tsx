import { Link } from "react-router-dom";
import { Logo } from "../index";
import styles from "./Footer.module.css";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footerContent} container`}>
				<Logo />

				<ul className={styles.footerLinksList}>
					<li>
						<Link to='#!'>Catalog</Link>
					</li>
					<li>
						<Link to='#!'>FAQ</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};
