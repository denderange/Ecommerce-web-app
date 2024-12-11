import styles from "./CartItem.module.css";
import { ButtonAddToCart, ButtonsCounter } from "..";
import { Cart } from "../../types/cart.types";

import productExampleImage from "../../assets/images/sample-product-image.jpg";
import { Link } from "react-router-dom";

type Props = {
	cartItem: Cart;
	id: number;
};

export const CartItem = ({ cartItem, id }: Props) => {
	const addToCart = () => {};

	return (
		<div
			className={`${cartItem.amount === 0 ? styles.itemZeroQuantity : ""} ${
				styles.productContainer
			}`}>
			<div className={styles.detailsWrapper}>
				<img
					src={productExampleImage}
					alt=''
					className={styles.productImage}
				/>

				<div className={styles.productDetails}>
					<Link
						to={`/product/${id}`}
						className={styles.productName}>
						{cartItem.product.productName}
					</Link>
					<span className={styles.productPrice}>${cartItem.product.price}</span>
				</div>
			</div>

			<div className={styles.buttons}>
				{cartItem.amount > 0 ? (
					<ButtonsCounter
						size='s'
						showDelete={true}
						quantity={cartItem.amount}
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
