import styles from "./SearchInput.module.css";
import { ChangeEvent } from "react";

type Props = {
	handleSearch: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
};

export const SearchInput = ({ handleSearch }: Props) => {
	return (
		<label htmlFor='search'>
			<input
				type='text'
				name='search'
				id='search'
				placeholder='Search by title'
				onChange={handleSearch}
				className={styles.searchInput}
			/>
		</label>
	);
};
