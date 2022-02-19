const UPDATE_LOAD_MORE = 'UPDATE_LOAD_MORE';

export const loadMoreReducer = (state={}, action) => {
	switch(action.type) {
		case UPDATE_LOAD_MORE:
			return {
				countElement: state.countElement + 4,
			}
		default:
			return state
	}
}

export const editLoadMore = (updateProducts) => {
	return {
		type: UPDATE_LOAD_MORE,
		payload: {
			updateProducts: updateProducts
		}
	}
}

export const selectLoadMoreCountElement = (state) => {
	return state.loadMore.countElement
}

export const initialLoadMore = {
	countElement: 4,
}