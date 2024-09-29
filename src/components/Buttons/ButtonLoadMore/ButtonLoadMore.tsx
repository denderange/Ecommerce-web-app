import { PulseLoader } from "react-spinners";
import styles from "./ButtonLoadMore.module.css";

type Props = {
	btnText?: string;
	loading: boolean;
	handleClick: () => void;
};

export const ButtonLoadMore = ({
	btnText = "Show more",
	loading = false,
	handleClick,
}: Props) => {
	return (
		<button
			data-testid='buttonLoadMore'
			onClick={handleClick}
			disabled={loading}
			className={`buttonLink ${styles.btnShowMore}`}>
			{!loading ? (
				btnText
			) : (
				<PulseLoader
					color='#ffffff'
					aria-label='Loading Spinner'
				/>
			)}
		</button>
	);
};
