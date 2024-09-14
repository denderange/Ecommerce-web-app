import { ProductCard } from "../Product/ProductCard/ProductCard";
import { SearchInput } from "../SearchInput/SearchInput";
import styles from "./Catalog.module.css";
import type { Product } from "../../types/product.types";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/mockApi";
import img from "../../assets/images/sample-product-image.jpg";

export const Catalog = () => {
	const [products, setProducts] = useState<Product[]>([]);

	// !!!
	// TODO : handle this hardcoded units ======>
	const handleSearchInput = () => {};
	const loadMoreProducts = () => {};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const fetchedProducts = await getProducts(12);
				setProducts(fetchedProducts);
			} catch (error) {
				console.log("Error GET products data: ", error);
			}
		};
		fetchProducts();
	}, [products]);
	// <======

	return (
		<section className={`container ${styles.catalog}`}>
			<h2 className={styles.catalogTitle}>Catalog</h2>

			<SearchInput handleSearchInput={handleSearchInput} />

			<ul className={styles.catalogList}>
				{products.map((product, index) => (
					<li key={index}>
						<ProductCard
							imagePath={img}
							productName={product.productName}
							price={Number(product.price.toFixed(2))}
						/>
						<p>{product.imagePath}</p>
					</li>
				))}
			</ul>

			<button
				className={`buttonLink ${styles.btnShowMore}`}
				onClick={loadMoreProducts}>
				Show more
			</button>
		</section>
	);
};
