import { getIngredientData } from "../../utils/burger-api";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS__REQUEST';
export const GET_INGREDIENTS__SUCCESS = 'GET_INGREDIENTS__SUCCESS';
export const GET_INGREDIENTS__FAILED = 'GET_INGREDIENTS__FAILED';

export function getIngredients() {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        getIngredientData()
        .then(data => {
            dispatch({
                type: GET_INGREDIENTS__SUCCESS,
                ingredients: data
            });
        })
        .catch(e => {
            dispatch({
                type: GET_INGREDIENTS__FAILED
            });
        })
    }
}