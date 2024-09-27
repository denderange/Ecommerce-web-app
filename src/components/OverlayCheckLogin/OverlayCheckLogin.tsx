import styles from "./OverlayCheckLogin.module.css";
import { PacmanLoader } from "react-spinners";

export const OverlayCheckLogin = () => {
	return (
		<div className={styles.overlayWrapper}>
			<div className={styles.content}>
				<p>Checking logged in user...</p>
				<PacmanLoader />
			</div>
		</div>
	);
};
