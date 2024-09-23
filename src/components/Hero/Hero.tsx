import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<div className='container'>
				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>
						Any products from famous brands with worldwide delivery
					</h1>
					<p className={styles.heroText}>
						We sell smartphones, laptops, clothes, shoes and many other products
						at low prices
					</p>
					<Link
						to='#CATALOG'
						className='buttonLink'>
						Go to shopping
					</Link>
				</div>
			</div>
		</section>
	);
};
