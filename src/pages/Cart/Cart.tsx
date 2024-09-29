import styles from "./Cart.module.css";
import { CartItem, CartSummary } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Cart = () => {
	const { cart, error } = useSelector((state: RootState) => state.cart);

	if (error === "Token Expired!") {
		console.log("token expired error.....");
	}

	return (
		<div className={`container ${styles.cart}`}>
			<h1 className={styles.title}>My cart</h1>

			{cart[0]?.products ? (
				<div className={styles.cartWrapper}>
					<div className={styles.cartItems}>
						{cart[0]?.products.map((product) => (
							<CartItem
								cartItem={product}
								key={product.id}
							/>
						))}
					</div>

					<CartSummary />
				</div>
			) : (
				<div className={styles.noItems}>No items</div>
			)}
		</div>
	);
};
