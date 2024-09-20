import styles from "./Catalog.module.css";
import { ChangeEvent, useState } from "react";
import { useGetProductsQuery } from "../../store/apiSlice";
import { calculatePriceWithDiscount } from "../../lib/utils/calculatePrice";
import { useDebounce } from "@uidotdev/usehooks";
import { ProductCard, SearchInput } from "..";

export const Catalog = () => {
	const [productsLimit, setProductsLimit] = useState<number>(12);

	const [searchString, setSearchString] = useState<string>("");
	const debouncedSearchString = useDebounce(searchString, 1000);

	const { data, isLoading, isError } = useGetProductsQuery({
		searchQuery: debouncedSearchString,
		productsLimit,
	});

	const handleSearchInput = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSearchString(e.currentTarget.value);
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

					{data?.total! - productsLimit > 0 && (
						<button
							className={`buttonLink ${styles.btnShowMore}`}
							onClick={() => setProductsLimit(productsLimit + 12)}>
							Show more
						</button>
					)}
				</>
			)}
		</section>
	);
};
