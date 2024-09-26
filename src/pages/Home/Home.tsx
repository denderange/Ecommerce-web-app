import { Catalog, FAQ, Hero } from "../../components";
// import { useAppDispatch } from "../../store/store";
// import { getCartByUserId } from "../../store/cartSlice";
// import { useGetCurrentUserQuery } from "../../store/userSlice";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

export const Home = () => {
	// const navigate = useNavigate();
	// const dispatch = useAppDispatch();
	// const token = window.localStorage.getItem("user") || "";

	// if (!token || token === "") {
	// 	navigate("/login", { replace: true });
	// }

	// const {
	// 	data: user,
	// 	error,
	// 	isSuccess,
	// } = useGetCurrentUserQuery(JSON.parse(token));

	// useEffect(() => {
	// 	if (isSuccess) {
	// 		dispatch(getCartByUserId(user.id));
	// 	}

	// 	if (error && "message" in error) {
	// 		if (error.message === "Token Expired!") {
	// 			navigate("/login", { replace: true });
	// 		}
	// 	}
	// }, [user, error]);

	return (
		<>
			<Hero />
			<Catalog />
			<FAQ />
		</>
	);
};
