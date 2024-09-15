import styles from "./SearchInput.module.css";

type Props = {
	handleSearchInput: () => void;
};

export const SearchInput = ({ handleSearchInput }: Props) => {
	return (
		<label htmlFor='search'>
			<input
				type='text'
				name='search'
				id='search'
				placeholder='Search by title'
				onChange={handleSearchInput}
				className={styles.searchInput}
			/>
		</label>
	);
};
