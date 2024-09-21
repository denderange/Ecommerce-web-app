import styles from "./CartItemSkeleton.module.css";

export const CartItemSkeleton = () => {
	return (
		<div className={styles.productContainer}>
			<div className={styles.detailsWrapper}>
				<div className={styles.productImage}>IMG</div>

				<div className={styles.productDetails}>
					<div className={styles.productName}>title</div>
					<span className={styles.productPrice}>$ priceWithDiscount</span>
				</div>
			</div>

			<div className={styles.buttons}>
				<div>BTN</div>
			</div>
		</div>
	);
};
