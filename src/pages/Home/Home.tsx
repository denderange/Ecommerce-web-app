import { useEffect, useState } from "react";
import { Catalog, FAQ, Hero } from "../../components";
import { useAppDispatch } from "../../store/store";
import { getCartByUserId } from "../../store/cartSlice";
import { useGetCurrentUserQuery } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	// const userId = 23; // hardcoded for now
	// const [userId, setUserId] = useState<number>();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const token = window.localStorage.getItem("user") || "";

	if (!token || token === "") {
		navigate("/login");
	}

	const {
		data: user,
		error,
		isSuccess,
	} = useGetCurrentUserQuery(JSON.parse(token));

	if (isSuccess) {
		// console.log("data :" + user.username);
		console.log("data :" + user.id);
		// dispatch(getCartByUserId(user.id));
		// setUserId(user.id);
		dispatch(getCartByUserId(23)).unwrap();
	}

	if (error && "message" in error) {
		console.log("error message: " + error.message);
	}

	// const fetchCart = async (userId: number) => {
	// 	try {
	// 		await dispatch(getCartByUserId(userId)).unwrap();
	// 	} catch (err) {}
	// };

	// useEffect(() => {
	// 	if (userId) {
	// 		fetchCart(userId);
	// 	}
	// }, [userId]);

	return (
		<>
			<Hero />
			<Catalog />
			<FAQ />
		</>
	);
};
