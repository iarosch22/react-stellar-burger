import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS__SUCCESS, GET_INGREDIENTS__FAILED } from "../actions/ingredients";

const initialState =  {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,

    ingredientsConstructor: {
        bun: null,
        ingredients: []
    },

    currentIngredient: {},

    order: {}
};


export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true
            };
        }
        case GET_INGREDIENTS__SUCCESS: {
            return {
                ...state,
                ingredientsFailed: false, ingredients: action.ingredients, ingredientsRequest: false
            };
        }
        case GET_INGREDIENTS__FAILED: {
            return {
                ...state,
                ingredientsFailed: true, ingredientsRequest: false
            };
        }
        default: {
            return state;
        }
    }
}
