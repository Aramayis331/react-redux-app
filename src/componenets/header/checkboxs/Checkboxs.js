import { useDispatch, useSelector } from 'react-redux';
import { editCheckbox, selectCheckbox } from '../../../store/features/checkboxs/checkboxsSlice';
import { editFilterProductsCheckbox } from '../../../store/features/filterProducts/filterProductsSlice';
import styles from './checkboxs.module.scss';

const Checkboxs = ( ) => {


	const checkboxs = useSelector(selectCheckbox);
	const dispatch = useDispatch();

	return (
		<div className={styles.checkboxs}>
			{
				checkboxs.map(item => {
					return (
						<div key={item.id} className={styles.div__checkbox} onClick={() => {
							dispatch(editCheckbox(item.id))
							dispatch(editFilterProductsCheckbox(item.type, item.isChecked))
						}}>
							<span className={item.isChecked ? styles.checkboxonn : styles.checkboxoff}></span>
							<label>{item.type}</label>
						</div>
					)
				})
			}
		</div>
	)
}

export default Checkboxs;