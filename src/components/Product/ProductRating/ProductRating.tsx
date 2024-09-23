import styles from "./ProductRating.module.css";
import starFilled from "../../../assets/icons/star-filled.svg";
import starEmpty from "../../../assets/icons/star-empty.svg";

export const ProductRating = ({ rating }: { rating: number }) => {
	return (
		<div className={styles.starsContainer}>
			{/* colored stars */}
			{[...Array(rating)].map((_, index) => (
				<img
					key={index}
					src={starFilled}
					alt=''
					className={styles.star}
				/>
			))}
			{/* gray stars */}
			{[...Array(5 - rating)].map((_, index) => (
				<img
					key={index}
					src={starEmpty}
					alt=''
					className={styles.star}
				/>
			))}
		</div>
	);
};
