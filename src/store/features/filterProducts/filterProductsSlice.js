const UPDATE_PRODUCT_COUNT_PLUS = 'UPDATE_PRODUCT_COUNT_PLUS';
const UPDATE_PRODUCT_COUNT_MINUS = 'UPDATE_PRODUCT_COUNT_MINUS';
const UPDATE_FILTER_CHECKBOX = 'UPDATE_FILTER_CHECKBOX';
const UPDATE_FILTER_SEARCH = 'UPDATE_FILTER_SEARCH';
const UPDATE_FILTER_SELECT = 'UPDATE_FILTER_SELECT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const filterProductsReducer = (state={}, action) => {
	switch(action.type) {
		case UPDATE_PRODUCT_COUNT_PLUS:
			const updateListPlus = state.updateProducts.map(item => item.id === action.payload.id ? {...item, count: item.count + 1} : item)
			return {
				...state,
				updateProducts: updateListPlus,
			}
		case UPDATE_PRODUCT_COUNT_MINUS:
			const updateListMinus = state.updateProducts.map(item => item.id === action.payload.id ? (item.count > 1 ? {...item, count: item.count - 1} : item) : item)
			return {
				...state,
				updateProducts: updateListMinus,
			}
		case UPDATE_FILTER_CHECKBOX:
			if(action.payload.checked) {
				return {...state, checkboxs: [...state.checkboxs, action.payload.type]}
			} else {
				const removeCheckbox = state.checkboxs.filter(item => item !== action.payload.type)
				return {...state, checkboxs: removeCheckbox}
			}
		case UPDATE_FILTER_SELECT:
			return {...state, select: action.payload.select}
		case UPDATE_FILTER_SEARCH: 
			return {...state, search: action.payload.text}
		case UPDATE_PRODUCT:
			let updateProducts = action.payload.products;

			if(state.checkboxs.length > 0) {
				updateProducts = updateProducts.filter(item => state.checkboxs.includes(item.type));
			}
			if(state.search.length > 0) {
				updateProducts = updateProducts.filter(item => item.titel.toLowerCase().includes(state.search.toLowerCase()))
			}
			if(state.select.length > 0) {
				if(state.select === 'ascending') {
					updateProducts = [...updateProducts].sort((a, b) => a.price - b.price)
				} else {
					updateProducts = [...updateProducts].sort((a, b) => b.price - a.price)
				}
			}
			return {
				...state,
				updateProducts: updateProducts,
			}

		default: 
			return state
	}
}

export const editFilterProductsSearch = (newText) => {
	return {
		type: UPDATE_FILTER_SEARCH,
		payload: {
			text: newText,
		}
	}
}

export const editFilterProductsSelect = (newSelect) => {
	return {
		type: UPDATE_FILTER_SELECT,
		payload: {
			select: newSelect,
		}
	}
} 

export const editFilterProductsCheckbox = (newType, newChecked) => {
	return {
		type: UPDATE_FILTER_CHECKBOX,
		payload: {
			type: newType,
			checked: !newChecked,
		}
	}
}

export const updateProducts = (products) => {
	return {
		type: UPDATE_PRODUCT,
		payload: {
			products: products,
		}
	}
}

export const editProductCountPlus = (newId) => {
	return {
		type: UPDATE_PRODUCT_COUNT_PLUS,
		payload: {
			id: newId
		}
	}
}

export const editProductCountMinus = (newId) => {
	return {
		type: UPDATE_PRODUCT_COUNT_MINUS,
		payload: {
			id: newId
		}
	}
}


export const selectSearch = (state) => {
	return state.filterProducts.search
} 

export const selectFilterProducts = (state) => {
	return state.filterProducts
}

export const selectUpdateProducts = (state) => {
	return state.filterProducts.updateProducts
}

export const initialFilterProducts = {
	updateProducts: [],
	checkboxs: [],
	search: '',
	select: '',
}