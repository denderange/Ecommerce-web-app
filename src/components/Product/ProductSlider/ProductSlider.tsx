import styles from "./ProductSlider.module.css";
import imgBlankSrc from "../../../assets/images/image-coming-soon-placeholder.webp";
import { useState } from "react";

type Props = {
	images: string[];
	imgAlt: string;
};

export const ProductSlider = ({ images, imgAlt }: Props) => {
	const [bigImgUrl, setBigImgUrl] = useState(0);

	return (
		<div className={styles.productSlider}>
			<div className={styles.bigPicture}>
				<img
					src={images[bigImgUrl] || imgBlankSrc}
					alt={imgAlt}
				/>
			</div>
			{images.length > 1 && (
				<div className={styles.pictures}>
					{images.map((img, index) => (
						<button
							key={index}
							onClick={() => setBigImgUrl(index)}
							className={`${styles.btnPicture} ${
								bigImgUrl === index ? styles.btnPictureActive : ""
							}`}>
							<img
								src={img}
								alt='product small photo'
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
};
