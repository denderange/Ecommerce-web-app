import styles from "./ProductSlider.module.css";
import imgBlankSrc from "../../../assets/images/image-coming-soon-placeholder.webp";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
	images: string[];
	imgAlt: string;
};

export const ProductSlider = ({ images, imgAlt }: Props) => {
	const [bigImgUrl, setBigImgUrl] = useState(0);

	return (
		<div className={styles.productSlider}>
			<div className={styles.bigPicture}>
				<LazyLoadImage
					alt={imgAlt}
					effect='blur'
					src={images[bigImgUrl] || imgBlankSrc}
					width='100%'
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
