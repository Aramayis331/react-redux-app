import { useDispatch, useSelector } from 'react-redux';
import { editLoadMore, selectLoadMoreCountElement } from '../../store/features/loadMore/loadMoreSlice';
import { selectUpdateProducts } from '../../store/features/filterProducts/filterProductsSlice';
import Product from './product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { funcEditScroll, editScrollToTop, selectScrollToTop } from '../../store/features/scrollToTop/scrollToTopSlice';
import styles from './home.module.scss';

const Home = () => {

	const dispatch = useDispatch();

	const updateProducts = useSelector(selectUpdateProducts);
	const countElement = useSelector(selectLoadMoreCountElement);
	const scrollToTop = useSelector(selectScrollToTop);
	
	const myRef = useRef(null)

	return (
		<div className={styles.container_home}>
			<div className={styles.home} ref={myRef} onScroll={() => dispatch(editScrollToTop(myRef.current))}>
				{
					updateProducts.slice(0, countElement).map((item) => {
						return <Product key={item.id} product={item}/>
					})
				}
			</div>
			{
				(countElement < updateProducts.length)
				&& 
				(
					<div className={styles.div__btn}>
						<button className={styles.btn} onClick={() => {
							dispatch(editLoadMore(updateProducts));
						}}>Load More</button>
					</div>
				)
			}
			<div className={scrollToTop ? `${styles.scrolToTop} ${styles.active}` : styles.scrolToTop} onClick={() => {
				funcEditScroll(myRef.current)
			}}>
				<FontAwesomeIcon icon={faAnglesUp} />
			</div>
		</div>
	)
}

export default Home;