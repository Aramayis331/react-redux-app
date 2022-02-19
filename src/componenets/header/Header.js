import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterProducts, updateProducts } from '../../store/features/filterProducts/filterProductsSlice';
import { selectProducts } from '../../store/features/products/produtsSlice';
import Search from './search/Search';
import Select from './select/Select';
import Checkboxs from './checkboxs/Checkboxs';
import styles from './header.module.scss';

const Header = () => {

	const dispatch = useDispatch();
	const filterProducts = useSelector(selectFilterProducts);
	const products = useSelector(selectProducts);
	
	useEffect(() => {
		dispatch(updateProducts(products));
	}, [filterProducts.checkboxs, filterProducts.search, filterProducts.select])

	return (
		<header className={styles.header}>
			<Search />
			<Checkboxs />
			<Select />
		</header>
	)
}

export default Header;