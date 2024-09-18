import { Link } from "react-router-dom";
import iconCart from "../../assets/icons/icon-cart.svg";
import styles from "./LinkCart.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const LinkCart = () => {
	const { cart, loading } = useSelector((state: RootState) => state.cart);

	return (
		<>
			<Link to='/cart'>
				<div className={styles.linkIcon}>
					Cart{" "}
					<img
						src={iconCart}
						alt=''
					/>
					{cart[0] && loading === "fulfilled" && (
						<span className={styles.cartItemsCount}>
							{cart[0].totalQuantity < 99 ? cart[0].totalQuantity : "99+"}
						</span>
					)}
				</div>
			</Link>
		</>
	);
};
