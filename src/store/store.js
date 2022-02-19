import { createStore, combineReducers } from "redux";
import { checkboxsReducer, initialCheckboxs } from "./features/checkboxs/checkboxsSlice";
import { filterProductsReducer, initialFilterProducts } from "./features/filterProducts/filterProductsSlice";
import { initialLoadMore, loadMoreReducer } from "./features/loadMore/loadMoreSlice";
import { initialProducts, productsReducer } from "./features/products/produtsSlice";
import { initialScrollToTop, scrollToTopReducer } from "./features/scrollToTop/scrollToTopSlice";

const store = createStore(combineReducers({
	products: productsReducer,
	filterProducts: filterProductsReducer,
	loadMore: loadMoreReducer,
	checkboxs: checkboxsReducer,
	scrollToTop: scrollToTopReducer,
}),{
	products: initialProducts,
	filterProducts: initialFilterProducts,
	loadMore: initialLoadMore,
	checkboxs: initialCheckboxs,
	scrollToTop: initialScrollToTop,
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;