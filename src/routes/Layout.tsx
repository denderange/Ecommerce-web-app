import { useEffect, useState } from "react";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header, ModalWindow } from "../components";
import { useAppDispatch } from "../store/store";
import { useGetCurrentUserQuery } from "../store/userSlice";
import { getCartByUserId } from "../store/cartSlice";

export const Layout = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const token = window.localStorage.getItem("user") || "";

	if (!token || token === "") {
		navigate("/login", { replace: true });
	}

	const {
		data: user,
		error,
		isSuccess,
	} = useGetCurrentUserQuery(JSON.parse(token));

	const handleCloseModal = () => {
		setIsOpen(false);
		navigate("/login", { replace: true });
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(getCartByUserId(user.id));
		}

		if (error && "message" in error) {
			if (error.message === "Token Expired!") {
				setIsOpen(true);
			}
		}
	}, [user, error]);

	return (
		<>
			<ScrollToHashElement
				behavior='smooth'
				inline='start'
				block='start'
			/>
			<Header
				firstName={user?.firstName}
				lastName={user?.lastName}
			/>
			<main>
				<Outlet />
			</main>
			<Footer />

			<ModalWindow
				modalIsOpen={modalIsOpen}
				closeModal={handleCloseModal}
			/>
		</>
	);
};
