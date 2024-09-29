import { useState } from "react";
import styles from "./ButtonsCounter.module.css";
import IconMinus from "../../../assets/icons/icon-minus.svg?react";
import IconPlus from "../../../assets/icons/icon-plus.svg?react";
import { RootState, useAppDispatch } from "../../../store/store";
import { updateCart } from "../../../store/cartActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

type Props = {
	size: "s" | "m";
	cartItemId: number;
	quantity: number;
	showDelete: boolean;
	inStock?: number;
};

export const ButtonsCounter = ({
	size,
	quantity,
	showDelete,
	cartItemId,
	inStock,
}: Props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [productsAmount, setProductsAmount] = useState<number>(quantity);
	const { cart, loading } = useSelector((state: RootState) => state.cart);
	const token = window.localStorage.getItem("user") || "";

	if (!token || token === "") {
		navigate("/login", { replace: true });
	}

	const decreaseItems = () => {
		setProductsAmount(productsAmount - 1);
		if (productsAmount > 0) {
			dispatch(
				updateCart({
					cartId: cart[0].id,
					token,
					products: [
						...cart[0].products,
						{ id: cartItemId, quantity: productsAmount - 1 },
					],
				})
			).then((res) => {
				if (res.payload.message === "Token Expired!") {
					navigate("/login", { replace: true });
				}
			});
		}
	};

	const increaseItems = () => {
		setProductsAmount(productsAmount + 1);
		dispatch(
			updateCart({
				cartId: cart[0].id,
				token,
				products: [
					...cart[0].products,
					{ id: cartItemId, quantity: productsAmount + 1 },
				],
			})
		).then((res) => {
			if (res.payload.message === "Token Expired!") {
				navigate("/login", { replace: true });
			}
		});
	};

	const deleteAllItems = () => {
		setProductsAmount(0);
		dispatch(
			updateCart({
				cartId: cart[0].id,
				token,
				products: [...cart[0].products, { id: cartItemId, quantity: 0 }],
			})
		);
	};

	return (
		<div className={styles.counter}>
			<button
				type='button'
				aria-label='decrease items amount in the cart'
				disabled={productsAmount === 0 || loading === "pending"}
				onClick={decreaseItems}
				className={`${size === "m" ? styles.btnSizeM : ""} ${styles.btnMinus}`}>
				{loading === "pending" ? (
					<ClipLoader
						color='#ffffff'
						size={15}
						aria-label='Loading Spinner'
					/>
				) : (
					<IconMinus />
				)}
			</button>

			<span className={styles.amount}>
				{productsAmount} {productsAmount === 1 ? "item" : "items"}
			</span>

			<button
				type='button'
				aria-label='increase items amount in the cart'
				disabled={
					productsAmount === 0 ||
					loading === "pending" ||
					(inStock ? inStock <= productsAmount : false)
				}
				onClick={increaseItems}
				className={`${size === "m" ? styles.btnSizeM : ""} ${
					inStock && inStock <= productsAmount ? styles.btnNotActive : ""
				} ${styles.btnPlus}`}>
				{loading === "pending" ? (
					<ClipLoader
						color='#ffffff'
						size={15}
						aria-label='Loading Spinner'
					/>
				) : (
					<IconPlus />
				)}
			</button>

			{showDelete && (
				<button
					onClick={deleteAllItems}
					aria-label='delete all items from the cart'
					className={styles.buttonDelete}>
					Delete
				</button>
			)}
		</div>
	);
};
