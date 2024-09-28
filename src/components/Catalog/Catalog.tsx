import styles from "./Catalog.module.css";
import { ChangeEvent, useState } from "react";
import { useGetProductsQuery } from "../../store/productSlice";
import { calculatePriceWithDiscount } from "../../lib/utils/calculatePrice";
import { useDebounce } from "@uidotdev/usehooks";
import {
	ButtonLoadMore,
	ProductCard,
	ProductCardSkeleton,
	SearchInput,
} from "..";
import { useNavigate } from "react-router-dom";

export const Catalog = () => {
	const navigate = useNavigate();
	const token = window.localStorage.getItem("user") || "";

	if (!token || token === "") {
		navigate("/login", { replace: true });
	}

	const [productsLimit, setProductsLimit] = useState<number>(12);
	const [searchString, setSearchString] = useState<string>("");
	const debouncedSearchString = useDebounce(searchString, 1000);

	const { data, isLoading, isFetching, isError } = useGetProductsQuery({
		searchQuery: debouncedSearchString,
		productsLimit,
		token,
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
				<ul className={styles.catalogList}>
					{[...Array(12).keys()]?.map((_, index) => (
						<li
							key={index}
							className={styles.catalogItem}>
							<ProductCardSkeleton />
						</li>
					))}
				</ul>
			) : (
				<>
					<ul className={styles.catalogList}>
						{data?.products?.map((product) => (
							<li
								key={product.id}
								className={styles.catalogItem}>
								<ProductCard
									id={product.id}
									stock={product.stock}
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
						<ButtonLoadMore
							loading={isFetching}
							handleClick={() => setProductsLimit(productsLimit + 12)}
						/>
					)}
				</>
			)}
		</section>
	);
};
