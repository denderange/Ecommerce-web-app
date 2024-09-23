import styles from "./Product.module.css";
import {
	ButtonAddToCart,
	ButtonsCounter,
	PageTitle,
	ProductRating,
	ProductSlider,
} from "../../components";
import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/apiSlice";
import { calculatePriceWithDiscount } from "../../lib/utils/calculatePrice";
import { getQuantityInCart } from "../../lib/utils/getQuantityInCart";
import { NotFound } from "../NotFound/NotFound";
import { APP_TITLE } from "../../constants/appTitle";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Product = () => {
	const { id } = useParams();
	const {
		data: product,
		isError,
		isLoading,
	} = useGetProductByIdQuery(Number(id));
	const { cart } = useSelector((state: RootState) => state.cart);
	const itemsQuantityInCart = getQuantityInCart(cart, Number(id));

	// !!! TODO: implement ability to add product in user's cart ==>
	const handleAddToCart = () => {};

	if (isError) {
		return <NotFound />;
	}

	return (
		<div className={`container ${styles.productDetails}`}>
			{isLoading && <div>-=Loading.......=-</div>}
			{product && (
				<>
					<PageTitle title={`${product.title} | ${APP_TITLE}`} />
					<ProductSlider
						images={product.images}
						imgAlt={product.title}
					/>

					<div className={styles.productInfo}>
						<h1 className={styles.title}>{product.title}</h1>
						<div className={styles.ratingAndCategory}>
							<ProductRating rating={Math.round(product.rating)} />

							<div className={styles.category}>
								{product?.tags.map((tag) => (
									<Link
										to='#!'
										key={tag}
										className={styles.categoryLink}>
										<span>{tag}</span>
									</Link>
								))}
							</div>
						</div>

						<div className={styles.stock}>
							In Stock - Only {product.stock} left!
						</div>

						<p className={styles.description}>{product.description}</p>

						<div className={styles.warranty}>
							{product?.warrantyInformation}
						</div>
						<div className={styles.shippingTime}>
							{product?.shippingInformation}
						</div>

						<div className={styles.bottomActions}>
							<div className={styles.priceAndDiscount}>
								<b>${product.price}</b>
								<span>
									$
									{calculatePriceWithDiscount(
										product.price,
										product.discountPercentage
									)}
								</span>
							</div>

							<div className={styles.discountAndButtons}>
								<div className={styles.discount}>
									Your discount:
									<b>{product.discountPercentage}%</b>
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
				</>
			)}
		</div>
	);
};
