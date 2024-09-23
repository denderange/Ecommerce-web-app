import type { Product } from "../../../types/product.types";
import styles from "./ProductCard.module.css";
import blankImage from "../../../assets/images/image-coming-soon-placeholder.webp";
import { ButtonAddToCart, ButtonsCounter } from "../..";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, imagePath, productName, price }: Product) => {
	// !!!
	// TODO: process this function
	const handleAddToCart = () => {};

	// !!!
	// TODO: check if current product exists in user's cart ==>
	const showButtonsPlusAndMinus = id === 4;
	const productCartAmount = 15;

	return (
		<div className={styles.productContainer}>
			<div className={styles.imgUnderlay}></div>

			<Link to={`product/${id}`}>
				<div className={styles.productImageContainer}>
					<img
						src={imagePath || blankImage}
						alt={productName}
						className={styles.productImage}
					/>
					<div className={styles.imgOverlay}>
						<span>Show details</span>
					</div>
				</div>
			</Link>

			<div className={styles.productDetails}>
				<div className={styles.productDescription}>
					<Link
						to={`product/${id}`}
						className={styles.productTextLink}>
						{productName}
					</Link>
					<span className={styles.productPrice}>${price}</span>
				</div>
				<div className={styles.buttons}>
					{!showButtonsPlusAndMinus ? (
						<ButtonAddToCart
							handleAddToCart={handleAddToCart}
							variant='icon'
						/>
					) : (
						<ButtonsCounter
							quantity={productCartAmount}
							size='s'
							showDelete={false}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
