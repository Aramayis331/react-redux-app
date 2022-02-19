import { useDispatch, useSelector } from 'react-redux';
import { editFilterProductsSelect } from '../../../store/features/filterProducts/filterProductsSlice';
import styles from './select.module.scss';

const Select = () => {

	const dispatch = useDispatch();

	return (
		<select className={styles.select} onChange={(e) => {
			dispatch(editFilterProductsSelect(e.target.value))
		}}>
			<option value='sort' hidden='hidden'>Sort</option>
			<option value='ascending'>Ascending</option>
			<option value='descending'>Descending</option>
		</select>
	)
}

export default Select;