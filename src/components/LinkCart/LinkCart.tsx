import styles from "./LinkCart.module.css";
import { Link } from "react-router-dom";
import iconCart from "../../assets/icons/icon-cart.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";

export const LinkCart = () => {
	const [totalQuantity, setTotalQuantity] = useState(0);
	const { cart, loading } = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		if (cart[0]?.products && loading === "fulfilled") {
			setTotalQuantity(
				cart[0].products.reduce((acc, item) => acc + item.quantity, 0)
			);
		}
	}, [cart]);

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
						{cart[0] && (cart[0].totalQuantity < 99 ? totalQuantity : "99+")}
					</span>
				</div>
			</Link>
		</>
	);
};
