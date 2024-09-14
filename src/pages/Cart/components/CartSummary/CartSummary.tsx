import styles from "./CartSummary.module.css";

type Props = {
	itemsAmount: number;
	priceWithoutDiscount: number;
	priceTotal: number;
};

const CartSummary = ({
	itemsAmount,
	priceWithoutDiscount,
	priceTotal,
}: Props) => {
	return (
		<div className={styles.cartSummary}>
			<div className={styles.totalAmount}>
				<span>Total count</span>
				<b>{itemsAmount} items</b>
			</div>

			<div className={styles.priceWithoutDiscount}>
				<span>Price without discount</span>
				<b>${priceWithoutDiscount}</b>
			</div>

			<div className={styles.priceTotal}>
				<span>Total price</span>
				<b>${priceTotal}</b>
			</div>
		</div>
	);
};

export default CartSummary;
