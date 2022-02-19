const UPDATE_SCROLL_TO_TOP ='UPDATE_SCROLL_TO_TOP';

export const scrollToTopReducer = (state={}, action) => {
	switch(action.type) {
		case UPDATE_SCROLL_TO_TOP:
			if(action.payload.myRefCurrent.scrollTop > 70) {
				return {...state, position: true}
			} else {
				return {...state, position: false}
			}

		default:
			return state;
	}
}

export const funcEditScroll = (myRefCurrent) => {
	return myRefCurrent.scroll({ top: 0, behavior: 'smooth' });
}

export const editScrollToTop = (newMyRefCurrent) => {
	return {
		type: UPDATE_SCROLL_TO_TOP,
		payload: {
			myRefCurrent: newMyRefCurrent,
		}
	}
}

export const selectScrollToTop = (state) => {
	return state.scrollToTop.position
}

export const initialScrollToTop = {
	position: false,
	scrolTop: 0,
}