const UPDATE_CHECKED_CHECKBOX = 'UPDATE_CHECKED_CHECKBOX';

export const checkboxsReducer = (state=[], action) => {
	switch(action.type) {
		case UPDATE_CHECKED_CHECKBOX:
			const updateCheckbox = state.map(item => item.id === action.payload.id ? {...item, isChecked: !item.isChecked} : item)
			return updateCheckbox;

		default:
			return state;
	}
}

export const editCheckbox = (productId) => {
	return {
		type: UPDATE_CHECKED_CHECKBOX,
		payload: {
			id: productId,
		}
	}
}

export const selectCheckbox = (state) => {
	return state.checkboxs
}

export const initialCheckboxs = [
		{
			id: Math.random(),
			type: 'American',
			isChecked: false,
		},
		{
			id: Math.random(),
			type: 'Chinese',
			isChecked: false,
		},
		{
			id: Math.random(),
			type: 'Italian',
			isChecked: false,
		}
]