import styles from "./ProductRating.module.css";
import starFilled from "../../../assets/icons/star-filled.svg";
import starEmpty from "../../../assets/icons/star-empty.svg";

export const ProductRating = () => {
	return (
		<div className={styles.starsContainer}>
			<img
				src={starFilled}
				alt=''
				className={styles.star}
			/>
			<img
				src={starFilled}
				alt=''
				className={styles.star}
			/>
			<img
				src={starFilled}
				alt=''
				className={styles.star}
			/>
			<img
				src={starFilled}
				alt=''
				className={styles.star}
			/>
			<img
				src={starEmpty}
				alt=''
				className={styles.star}
			/>
		</div>
	);
};
