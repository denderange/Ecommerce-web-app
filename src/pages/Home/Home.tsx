import { useEffect } from "react";
import { Catalog, FAQ, Hero } from "../../components";
import { useAppDispatch } from "../../store/store";
import { getCartByUserId } from "../../store/cartSlice";

export const Home = () => {
	const userId = 23; // hardcoded for now
	const dispatch = useAppDispatch();

	const fetchCart = async (userId: number) => {
		try {
			await dispatch(getCartByUserId(userId)).unwrap();
		} catch (err) {}
	};

	useEffect(() => {
		fetchCart(userId);
	}, [userId]);

	return (
		<>
			<Hero />
			<Catalog />
			<FAQ />
		</>
	);
};
