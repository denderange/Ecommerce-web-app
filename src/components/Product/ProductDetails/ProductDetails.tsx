import styles from "./ProductDetails.module.css";
import { productData } from "../../../api/mockProduct";
import { ButtonAddToCart, ProductRating, ProductSlider } from "../..";
// import { useParams } from "react-router-dom";

export const ProductDetails = () => {
	// const { id } = useParams();
	// TODO: fetch product data by this id and remove -=productData=-

	const {
		productName,
		ratings,
		inStock,
		description,
		warranty,
		shippingTime,
		price,
		categories,
	} = productData;

	const priceWithDiscount = 9.99;
	const userDiscount = 14.5;

	const handleAddToCart = () => {};

	return (
		<div className={`container ${styles.productDetails}`}>
			<ProductSlider />

			<div className={styles.productInfo}>
				<h1 className={styles.title}>{productName}</h1>
				<div className={styles.ratingAndCategory}>
					<ProductRating rating={ratings} />

					<div className={styles.categories}>
						<span>{categories[0]}</span>
						{", "}
						<span>{categories[1]}</span>
					</div>
				</div>

				<div className={styles.stock}>In Stock - Only {inStock} left!</div>

				<p className={styles.description}>{description}</p>

				<div className={styles.warranty}>{warranty} warranty</div>
				<div className={styles.shippingTime}>Ships in {shippingTime}</div>

				<div className={styles.bottomActions}>
					<div className={styles.priceAndDiscount}>
						<b>${price}</b>
						<span>${priceWithDiscount}</span>
					</div>

					<div className={styles.discount}>
						Your discount:
						<b>{userDiscount}%</b>
					</div>

					<ButtonAddToCart
						handleAddToCart={handleAddToCart}
						variant='text'
						className={styles.btnAddToCart}
					/>
				</div>
			</div>
		</div>
	);
};
