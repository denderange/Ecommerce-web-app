import type { Product } from "../../../types/product.types";
import styles from "./ProductCard.module.css";
import blankImage from "../../../assets/images/image-coming-soon-placeholder.webp";
import { ButtonAddToCart } from "../..";

export const ProductCard = ({ imagePath, productName, price }: Product) => {
	// !!!
	// TODO: process this function
	const handleAddToCart = () => {};

	return (
		<div className={styles.productContainer}>
			<div className={styles.productImageContainer}>
				<img
					src={imagePath || blankImage}
					alt={productName}
					className={styles.productImage}
				/>
			</div>

			<div className={styles.productDetails}>
				<div className={styles.productDescription}>
					<p className={styles.productText}>{productName}</p>
					<span className={styles.productPrice}>${price}</span>
				</div>
				<ButtonAddToCart
					handleAddToCart={handleAddToCart}
					variant='icon'
				/>
				{/* <ButtonsCounter /> */}
			</div>
		</div>
	);
};
