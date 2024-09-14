import styles from "./Cart.module.css";
// TODO: replace with actual data
// sample data file =>
import { cart } from "../../api/mockCartItems";
import CartItem from "./components/CartItem/CartItem";
import CartSummary from "./components/CartSummary/CartSummary";

export const Cart = () => {
	// TODO: this values should be taken from the real cart:
	const itemsAmount = 3;
	const priceWithoutDiscount = 700;
	const priceTotal = 590;

	return (
		<div className={`container ${styles.cart}`}>
			<h1 className={styles.title}>My cart</h1>

			<div className={styles.cartWrapper}>
				<div className={styles.cartItems}>
					{cart.map((item) => (
						<CartItem cartItem={item} />
					))}
				</div>

				<CartSummary
					itemsAmount={itemsAmount}
					priceWithoutDiscount={priceWithoutDiscount}
					priceTotal={priceTotal}
				/>
			</div>
		</div>
	);
};
