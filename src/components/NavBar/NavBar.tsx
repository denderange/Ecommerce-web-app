import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { LinkCart } from "..";

export const NavBar = () => {
	const currentUser = "Johnson Smith";
	const itemsInCartAmount = 101;

	return (
		<nav>
			<ul className={styles.navList}>
				<li>
					<Link to='#!'>Catalog</Link>
				</li>
				<li>
					<Link to='#!'>FAQ</Link>
				</li>
				<li>
					<LinkCart itemsInCartAmount={itemsInCartAmount} />
				</li>
				<li>
					<Link to='#!'>{currentUser}</Link>
				</li>
			</ul>
		</nav>
	);
};
