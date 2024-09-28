import styles from "./ButtonAddToCart.module.css";
import iconCart from "../../../assets/icons/icon-cart.svg";
import { RootState, useAppDispatch } from "../../../store/store";
import { updateCart } from "../../../store/cartActions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ClipLoader, PulseLoader } from "react-spinners";

export type Props = {
	variant: "icon" | "text";
	btnText?: string;
	cartItemId: number;
};

export const ButtonAddToCart = ({
	variant,
	btnText = "Add to cart",
	cartItemId,
}: Props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { cart, loading, error } = useSelector(
		(state: RootState) => state.cart
	);
	const token = window.localStorage.getItem("user") || "";

	if (!token || token === "") {
		navigate("/login", { replace: true });
	}

	const handleAddToCart = () => {
		if (!(error === "Token Expired!")) {
			dispatch(
				updateCart({
					cartId: cart[0].id,
					token,
					products: [...cart[0].products, { id: cartItemId, quantity: 1 }],
				})
			).then((res) => {
				if (res.payload.message === "Token Expired!") {
					navigate("/login", { replace: true });
				}
			});
		}
	};

	return (
		<button
			disabled={loading === "pending"}
			onClick={handleAddToCart}
			className={`${variant === "icon" ? styles.btnImg : styles.btnText}`}>
			{variant === "icon" ? (
				loading === "pending" ? (
					<ClipLoader
						color='#ffffff'
						size={15}
						aria-label='Loading Spinner'
					/>
				) : (
					<img
						src={iconCart}
						alt=''
						className={styles.image}
					/>
				)
			) : loading === "pending" ? (
				<PulseLoader
					color='#ffffff'
					aria-label='Loading Spinner'
				/>
			) : (
				btnText
			)}
		</button>
	);
};
