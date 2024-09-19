import styles from "./ProductSlider.module.css";
import imgBlankSrc from "../../../assets/images/image-coming-soon-placeholder.webp";

type Props = {
	images: string[];
	imgAlt: string;
};

export const ProductSlider = ({ images, imgAlt }: Props) => {
	return (
		<div className={styles.productSlider}>
			<div className={styles.bigPicture}>
				<img
					src={images[0]}
					alt={imgAlt}
				/>
			</div>
			{images.length > 1 && (
				<div className={styles.pictures}>
					{images.map((img, index) => (
						<img
							key={index}
							src={img}
							alt='product small photo'
						/>
					))}
				</div>
			)}
		</div>
	);
};
