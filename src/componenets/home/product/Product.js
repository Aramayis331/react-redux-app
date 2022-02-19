import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from './product.module.scss';
import { useDispatch } from "react-redux";
import { editProductCountPlus, editProductCountMinus } from "../../../store/features/filterProducts/filterProductsSlice";
import aa from '../../../../public/images/'


const Product = ({ product }) => {

	const dispatch = useDispatch();

	return (
		<div className={styles.product}>
			<div className={styles.div__img}>
				<img src={product.img} alt='noPhoto'/>
			</div>
			<div className={styles.container}>
				<div className={styles.div__titel}>
					<p>{product.titel}</p>
				</div>
				<div className={styles.div__price}>
					<p>{product.price}$</p>
					<div className={styles.div__count}>
						<FontAwesomeIcon className={styles.arrow} icon={faAngleLeft} onClick={() => {
							dispatch(editProductCountMinus(product.id))
						}}/>
						<p className={styles.count}>{product.count}</p>
						<FontAwesomeIcon className={styles.arrow} icon={faAngleRight} onClick={() => {
							dispatch(editProductCountPlus(product.id))
						}}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product;