import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { LinkCart } from "..";

export const NavBar = () => {
	const currentUser = "Johnson Smith";

	return (
		<nav>
			<ul className={styles.navList}>
				<li>
					<Link to='/#CATALOG'>Catalog</Link>
				</li>
				<li>
					<Link to='/#FAQ'>FAQ</Link>
				</li>
				<li>
					<LinkCart />
				</li>
				<li>
					<Link to='#!'>{currentUser}</Link>
				</li>
			</ul>
		</nav>
	);
};
