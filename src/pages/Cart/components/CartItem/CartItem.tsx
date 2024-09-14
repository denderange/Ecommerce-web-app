import styles from "./CartItem.module.css";
import { ButtonAddToCart, ButtonsCounter } from "../../../../components";
import { Cart } from "../../../../types/cart.types";

import productExampleImage from "../../../../assets/images/sample-product-image.jpg";

type Props = {
	cartItem: Cart;
};

const CartItem = ({ cartItem }: Props) => {
	const addToCart = () => {};

	return (
		<div className={styles.productContainer}>
			<div className={styles.detailsWrapper}>
				<img
					src={productExampleImage}
					alt=''
					className={styles.productImage}
				/>

				<div className={styles.productDetails}>
					<p className={styles.productName}>{cartItem.product.productName}</p>
					<span className={styles.productPrice}>{cartItem.product.price}</span>
				</div>
			</div>

			{cartItem.amount > 0 ? (
				<ButtonsCounter size='s' />
			) : (
				<ButtonAddToCart handleAddToCart={addToCart} />
			)}
		</div>
	);
};

export default CartItem;
