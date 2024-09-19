import styles from "./Catalog.module.css";
import { ChangeEvent, useState } from "react";
import { ProductCard } from "../Product/ProductCard/ProductCard";
import { SearchInput } from "../SearchInput/SearchInput";
import { useGetProductsQuery } from "../../store/apiSlice";
import { calculatePriceWithDiscount } from "../../lib/utils/calculatePrice";
import { useDebounce } from "@uidotdev/usehooks";

export const Catalog = () => {
	const [productsLimit, setProductsLimit] = useState<number>(12);

	const [searchQuery, setSearchQuery] = useState<string>("");
	const debouncedSearchQuery = useDebounce(searchQuery, 1000);
	const { data, isLoading, isError } =
		useGetProductsQuery(debouncedSearchQuery);

	const handleSearchInput = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSearchQuery(e.currentTarget.value);
	};

	// !!!
	// TODO : handle this hardcoded units ======>
	// const handleSearchInput = () => {};
	const loadMoreProducts = () => {
		// setProductsLimit
	};

	return (
		<section
			id='CATALOG'
			className={`container ${styles.catalog}`}>
			<h2 className={styles.catalogTitle}>Catalog</h2>

			<SearchInput handleSearch={(e: any) => handleSearchInput(e)} />

			{isError && (
				<div className={styles.fetchError}>Failed to load product list</div>
			)}
			{isLoading ? (
				<div>-=Loading......=-</div>
			) : (
				<>
					<ul className={styles.catalogList}>
						{data?.products?.map((product) => (
							<li key={product.id}>
								<ProductCard
									id={product.id}
									imagePath={product.thumbnail}
									productName={product.title}
									price={calculatePriceWithDiscount(
										product.price,
										product.discountPercentage
									)}
								/>
							</li>
						))}
					</ul>

					{data?.products.length! < 12 && (
						<button
							className={`buttonLink ${styles.btnShowMore}`}
							onClick={() => setProductsLimit(productsLimit + 12)}>
							Show more
						</button>
					)}
					<p>adad{data?.total}</p>
				</>
			)}
		</section>
	);
};
