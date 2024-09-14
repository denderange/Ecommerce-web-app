import { useState } from "react";
import styles from "./ButtonsCounter.module.css";

type Props = {
	size: "s" | "m";
};

export const ButtonsCounter = ({ size }: Props) => {
	const [productsAmount, setProductsAmount] = useState<number>(4);

	// !!!
	// TODO: make function to fetch product items quantity
	// from the CART state
	// and set this amount via setProductsAmount

	return (
		<div>
			<button
				disabled={productsAmount === 0}
				className={styles.btnCount}>
				-
			</button>
			<span>{productsAmount}</span>
			<button
				disabled={productsAmount === 0}
				className={styles.btnCount}>
				+
			</button>
		</div>
	);
};
