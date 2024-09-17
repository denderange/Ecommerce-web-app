import styles from "./Product.module.css";
import { productData } from "../../api/mockProduct";
import {
	ButtonAddToCart,
	ButtonsCounter,
	ProductRating,
	ProductSlider,
} from "../../components";
// import { useParams } from "react-router-dom";

export const Product = () => {
	// const { id } = useParams();
	// TODO: fetch product data by this id and remove -=productData=-

	const {
		productName,
		inStock,
		description,
		warranty,
		shippingTime,
		price,
		categories,
	} = productData;

	const priceWithDiscount = 9.99;
	const userDiscount = 14.5;
	const itemsQuantityInCart = 0;

	const handleAddToCart = () => {};

	return (
		<div className={`container ${styles.productDetails}`}>
			<ProductSlider />

			<div className={styles.productInfo}>
				<h1 className={styles.title}>{productName}</h1>
				<div className={styles.ratingAndCategory}>
					<ProductRating />

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

					<div className={styles.discountAndButtons}>
						<div className={styles.discount}>
							Your discount:
							<b>{userDiscount}%</b>
						</div>

						{itemsQuantityInCart ? (
							<ButtonsCounter
								size='m'
								quantity={itemsQuantityInCart}
								showDelete={false}
							/>
						) : (
							<ButtonAddToCart
								handleAddToCart={handleAddToCart}
								variant='text'
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
