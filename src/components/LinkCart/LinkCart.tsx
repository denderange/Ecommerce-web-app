import { Link } from "react-router-dom";
import iconCart from "../../assets/icons/icon-cart.svg";
import styles from "./LinkCart.module.css";

interface Props {
	itemsInCartAmount: number;
}

export const LinkCart = ({ itemsInCartAmount }: Props) => {
	return (
		<>
			<Link to='/cart'>
				<div className={styles.linkIcon}>
					Cart{" "}
					<img
						src={iconCart}
						alt=''
					/>
					<span className={styles.cartItemsCount}>
						{itemsInCartAmount < 99 ? itemsInCartAmount : "99+"}
					</span>
				</div>
			</Link>
		</>
	);
};
