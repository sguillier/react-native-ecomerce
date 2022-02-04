import { CATEGORIES } from '../../utils/data/dataCategories.js';

const initialState = {
    categories: CATEGORIES,
    selected: null,
}

export default function CategoriesReducer(state = initialState, action) {
    switch(action.type) {
        case 'SELECT_CATEGORY':
            const indexCategory = state.categories.findIndex(category => category.id === action.categoryId);
            if(indexCategory === -1) return state
            return {
                ...state,
                selected: state.categories[indexCategory]
            }
        default: 
            return state;
    }
}

