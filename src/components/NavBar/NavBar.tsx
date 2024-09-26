import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { LinkCart } from "..";
import { useAuth } from "../../lib/hooks/useAuth";

export const NavBar = () => {
	const currentUser = "Johnson Smith";
	const { logout } = useAuth();

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
				<li>
					<button onClick={() => logout()}>logout</button>
				</li>
			</ul>
		</nav>
	);
};
