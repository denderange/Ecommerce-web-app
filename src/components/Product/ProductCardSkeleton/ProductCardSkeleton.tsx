import GridLoader from "react-spinners/GridLoader";
import styles from "./ProductCardSkeleton.module.css";

export const ProductCardSkeleton = () => {
	return (
		<>
			<div className={styles.productImage}>
				<GridLoader
					color='#b2b5bb'
					aria-label='Loading Spinner'
				/>
			</div>

			<div className={styles.productDetails}>
				<div className={styles.productDescription}>
					<div className={`${styles.productTextLink} blink`} />
					<div className={`${styles.productPrice} blink`} />
				</div>

				<div className={`${styles.btn} blink`} />
			</div>
		</>
	);
};
