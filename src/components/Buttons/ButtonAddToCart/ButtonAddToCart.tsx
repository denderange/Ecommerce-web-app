import styles from "./ButtonAddToCart.module.css";
import iconCart from "../../../assets/icons/icon-cart.svg";

export type Props = {
	handleAddToCart: () => void;
};

export const ButtonAddToCart = ({ handleAddToCart }: Props) => {
	return (
		<button
			onClick={handleAddToCart}
			className={styles.btnAddToCart}>
			<img
				src={iconCart}
				alt=''
				className={styles.btnImg}
			/>
		</button>
	);
};
