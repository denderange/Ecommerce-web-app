import { useEffect } from "react";
import { Catalog, FAQ, Hero } from "../../components";
import { useAppDispatch } from "../../store/store";
import { getCartByUserId } from "../../store/cartSlice";
import { useGetCurrentUserQuery } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const token = window.localStorage.getItem("user") || "";

	console.log("token: " + JSON.parse(token));
	console.log("token *: " + token);

	if (!token || token === "") {
		navigate("/login");
	}

	// const [getCurrentUser, { isLoading }] = useGetCurrentUserQuery(
	// 	JSON.parse(token)
	// );

	const userId = 23; // hardcoded for now
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
