import styles from "./ButtonAddToCart.module.css";
import iconCart from "../../../assets/icons/icon-cart.svg";

export type Props = {
	variant: "icon" | "text";
	btnText?: string;
	handleAddToCart: () => void;
};

export const ButtonAddToCart = ({
	variant,
	btnText = "Add to cart",
	handleAddToCart,
}: Props) => {
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
				btnText
			)}
		</button>
	);
};
