import styles from "./ProductSlider.module.css";

import imgSrc from "../../../assets/images/sample-product-image.jpg";

export const ProductSlider = () => {
	return (
		<div className={styles.productSlider}>
			<div className={styles.bigPicture}>
				<img
					src={imgSrc}
					alt=''
				/>
			</div>
			<div className={styles.pictures}>
				<img
					src={imgSrc}
					alt=''
				/>
				<img
					src={imgSrc}
					alt=''
				/>
				<img
					src={imgSrc}
					alt=''
				/>
				<img
					src={imgSrc}
					alt=''
				/>
				<img
					src={imgSrc}
					alt=''
				/>
				<img
					src={imgSrc}
					alt=''
				/>
			</div>
		</div>
	);
};
