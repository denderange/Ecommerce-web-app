import styles from "./ProductCard.module.css";
import blankImage from "../../../assets/images/image-coming-soon-placeholder.webp";
import { ButtonAddToCart, ButtonsCounter } from "../..";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState } from "react";

type Props = {
	id: number;
	imagePath: string;
	productName: string;
	price: number;
};

export const ProductCard = ({ id, imagePath, productName, price }: Props) => {
	const [quantityInCart, setQuantityInCart] = useState(0);
	// const { cart } = useSelector((state: RootState) => state.cart);

	// console.log(cart);

	// if (cart) {
	// 	const productInCart = cart[0].products.find((product) => product.id === id);

	// 	if (productInCart) {
	// 		setQuantityInCart(productInCart?.quantity);
	// 	}
	// }

	// !!!
	// TODO: check if current product exists in user's cart.
	// TODO: process this function
	const handleAddToCart = () => {};

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
					{quantityInCart > 0 ? (
						<ButtonsCounter
							quantity={quantityInCart}
							size='s'
							showDelete={false}
						/>
					) : (
						<ButtonAddToCart
							handleAddToCart={handleAddToCart}
							variant='icon'
						/>
					)}
				</div>
			</div>
		</div>
	);
};
