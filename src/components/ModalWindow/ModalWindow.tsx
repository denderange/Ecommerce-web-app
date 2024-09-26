import styles from "./ModalWindow.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
	modalIsOpen: boolean;
	closeModal: () => void;
};

export const ModalWindow = ({ modalIsOpen, closeModal }: Props) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			className={styles.modal}
			overlayClassName={styles.overlay}
			contentLabel='Modal window: User session state'>
			<div className={styles.modal}>
				<div>
					The session time has expired
					<p>Please login again</p>
				</div>
				<div>
					Время сессии истекло.
					<p>Пожалуйста, авторизуйтесь заново</p>
				</div>
				<button
					onClick={closeModal}
					className='buttonLink'>
					Log In
				</button>
			</div>
		</Modal>
	);
};
