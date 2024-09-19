import styles from "./Cart.module.css";
import { CartItem, CartSummary } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Cart = () => {
	// const { cart, loading } = useSelector((state: RootState) => state.cart);

	return (
		<div className={`container ${styles.cart}`}>
			<h1 className={styles.title}>My cart</h1>

			{/* {cart[0] && loading === "fulfilled" ? (
				<div className={styles.cartWrapper}>
					<div className={styles.cartItems}>
						{cart[0]?.products.map((product) => (
							<CartItem
								cartItem={product}
								key={product.id}
							/>
						))}
					</div>

					<CartSummary
						itemsAmount={cart[0]?.totalProducts}
						priceWithoutDiscount={cart[0].total}
						priceTotal={cart[0].discountedTotal}
					/>
				</div>
			) : (
				<div className={styles.noItems}>No items</div>
			)} */}
		</div>
	);
};
