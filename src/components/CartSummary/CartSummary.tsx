import styles from "./CartSummary.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { calculatePriceWithDiscount } from "../../lib/utils/calculatePrice";

export const CartSummary = () => {
	const [priceDiscount, setPriceDiscount] = useState(0);
	const [priceNoDiscount, setPriceNoDiscount] = useState(0);
	const [totalCount, setTotalCount] = useState(0);
	const { cart, loading } = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		if (loading === "fulfilled") {
			const productsWithPositiveQuantity = cart[0].products.filter(
				(product) => product.quantity > 0
			);

			setTotalCount(productsWithPositiveQuantity.length);

			setPriceDiscount(
				cart[0].products.reduce(
					(acc, product) =>
						acc +
						calculatePriceWithDiscount(
							product.price,
							product.discountPercentage
						) *
							product.quantity,
					0
				)
			);

			setPriceNoDiscount(
				cart[0].products.reduce((acc, product) => acc + product.total, 0)
			);
		}
	}, [cart, priceDiscount, priceNoDiscount]);

	return (
		<div className={styles.cartSummary}>
			<div className={styles.totalAmount}>
				<span>Total count</span>
				<b>{totalCount} items</b>
			</div>

			<div className={styles.priceWithoutDiscount}>
				<span>Price without discount</span>
				<b>${priceNoDiscount.toFixed(2)}</b>
			</div>

			<div className={styles.priceTotal}>
				<span>Total price</span>
				<b>${priceDiscount.toFixed(2)}</b>
			</div>
		</div>
	);
};
