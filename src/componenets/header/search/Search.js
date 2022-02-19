import { useDispatch, useSelector } from 'react-redux';
import { editFilterProductsSearch, selectSearch } from '../../../store/features/filterProducts/filterProductsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './search.module.scss';

const Search = () => {

	const text = useSelector(selectSearch)
	const dispatch = useDispatch();

	return (
		<div className={styles.search}> 
			<input type='text' value={text} placeholder='Search...'  onChange={(e) => {
				dispatch(editFilterProductsSearch(e.target.value))
			}}/>
			<FontAwesomeIcon className={styles.iconSearch} icon={faSearch} />
		</div>
	)
}

export default Search;