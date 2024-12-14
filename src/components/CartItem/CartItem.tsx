import styles from "./CartItem.module.css";
import { Link } from "react-router-dom";
import { ButtonAddToCart, ButtonsCounter } from "..";
import { TProductInCart } from "../../types/product.types";
import { calculatePriceWithDiscount } from "../../lib/utils/calculatePrice";

type Props = {
	cartItem: TProductInCart;
};

export const CartItem = ({ cartItem }: Props) => {
	const addToCart = () => {};

	const priceWithDiscount = calculatePriceWithDiscount(
		cartItem.price,
		cartItem.discountPercentage
	);

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
					<span className={styles.productPrice}>${priceWithDiscount}</span>
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
