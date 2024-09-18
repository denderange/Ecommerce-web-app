import styles from "./CartItem.module.css";
import { Link } from "react-router-dom";
import { ButtonAddToCart, ButtonsCounter } from "..";
import { ProductT } from "../../types/product.types";

type Props = {
	cartItem: ProductT;
};

export const CartItem = ({ cartItem }: Props) => {
	const addToCart = () => {};

	const priceWithDiscount =
		cartItem.price - (cartItem.price * cartItem.discountPercentage) / 100;

	return (
		<div
			className={`${cartItem.quantity === 0 ? styles.itemZeroQuantity : ""} ${
				styles.productContainer
			}`}>
			<div className={styles.detailsWrapper}>
				<img
					src={cartItem.thumbnail}
					alt={cartItem.title}
					className={styles.productImage}
				/>

				<div className={styles.productDetails}>
					<Link
						to={`/product/${cartItem.id}`}
						className={styles.productName}>
						{cartItem.title}
					</Link>
					<span className={styles.productPrice}>
						${priceWithDiscount.toFixed(2)}
					</span>
				</div>
			</div>

			<div className={styles.buttons}>
				{cartItem.quantity > 0 ? (
					<ButtonsCounter
						size='s'
						showDelete={true}
						quantity={cartItem.quantity}
					/>
				) : (
					<ButtonAddToCart
						handleAddToCart={addToCart}
						variant='icon'
					/>
				)}
			</div>
		</div>
	);
};
