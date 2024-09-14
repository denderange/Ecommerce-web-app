import styles from "./SearchInput.module.css";

type Props = {
	handleSearchInput: () => void;
};

export const SearchInput = ({ handleSearchInput }: Props) => {
	return (
		<input
			type='text'
			placeholder='Search by title'
			onChange={handleSearchInput}
			className={styles.searchInput}
		/>
	);
};
