import { useState } from "react";
import styles from "./ButtonsCounter.module.css";
import IconMinus from "../../../assets/icons/icon-minus.svg?react";
import IconPlus from "../../../assets/icons/icon-plus.svg?react";

type Props = {
	size: "s" | "m";
	quantity: number;
	showDelete: boolean;
};

export const ButtonsCounter = ({ size, quantity, showDelete }: Props) => {
	const [productsAmount, setProductsAmount] = useState<number>(quantity);

	// !!!
	// TODO: make function to get and update product items quantity
	// from the CART state

	const decreaseItems = () => {
		if (productsAmount > 0) {
			setProductsAmount(productsAmount - 1);
		}
	};

	const increaseItems = () => {
		setProductsAmount(productsAmount + 1);
	};

	return (
		<div className={styles.counter}>
			<button
				disabled={productsAmount === 0}
				onClick={decreaseItems}
				className={`${size === "m" ? styles.btnSizeM : ""} ${styles.btnMinus}`}>
				<IconMinus />
			</button>
			<span className={styles.amount}>{productsAmount} item</span>
			<button
				disabled={productsAmount === 0}
				onClick={increaseItems}
				className={`${size === "m" ? styles.btnSizeM : ""} ${styles.btnPlus}`}>
				<IconPlus />
			</button>
			{showDelete && <button className={styles.buttonDelete}>Delete</button>}
		</div>
	);
};
