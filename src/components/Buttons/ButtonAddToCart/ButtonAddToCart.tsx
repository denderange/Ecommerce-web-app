import styles from "./ButtonAddToCart.module.css";
import iconCart from "../../../assets/icons/icon-cart.svg";

export type Props = {
	variant: "icon" | "text";
	handleAddToCart: () => void;
};

export const ButtonAddToCart = ({ handleAddToCart, variant }: Props) => {
	return (
		<button
			onClick={handleAddToCart}
			className={`${variant === "icon" ? styles.btnImg : styles.btnText}`}>
			{variant === "icon" ? (
				<img
					src={iconCart}
					alt=''
					className={styles.image}
				/>
			) : (
				"Add to cart"
			)}
		</button>
	);
};
