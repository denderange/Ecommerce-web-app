import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { LinkCart } from "..";

type Props = {
	firstName: string | undefined;
	lastName: string | undefined;
};

export const NavBar = ({ firstName, lastName }: Props) => {
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
				{(firstName || lastName) && (
					<li>
						{firstName} {lastName}
					</li>
				)}
			</ul>
		</nav>
	);
};
