import styles from "./ProductCard.module.css";
import blankImage from "../../../assets/images/image-coming-soon-placeholder.webp";
import { ButtonAddToCart, ButtonsCounter } from "../..";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getQuantityInCart } from "../../../lib/utils/getQuantityInCart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
	id: number;
	imagePath: string;
	productName: string;
	price: number;
};

export const ProductCard = ({ id, imagePath, productName, price }: Props) => {
	const { cart } = useSelector((state: RootState) => state.cart);
	const quantityInCart = getQuantityInCart(cart, id);

	const handleAddToCart = () => {};

	return (
		<>
			<div className={styles.imgUnderlay}></div>

			<Link to={`product/${id}`}>
				<div className={styles.productImageContainer}>
					<LazyLoadImage
						alt={productName}
						effect='blur'
						src={imagePath || blankImage}
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
		</>
	);
};
