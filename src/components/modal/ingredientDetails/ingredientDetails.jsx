import styles from './ingredientDetails.module.css';
import ingredientPropType from '../../../utils/prop-types';

function IngredientDetails( { ingredient } ) {
    return (
        <div className={`${styles.container} pt-10 pl-10 pr-10 pb-15`}>
            <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
            <img src={ingredient.image_large} alt="image of indredient" />
            <section className={`${styles.details}`}>
                <h3 className={`${styles.name} text text_type_main-medium`}>{ingredient.name}</h3>
                <ul className={`${styles.textbox} text text_type_main-default text_color_inactive`}>
                    <li className={`${styles.textbox_item}`}>
                        <span>Калории, ккал</span>
                        <span className='text_type_digits-default'>{ingredient.calories}</span>
                    </li>
                    <li className={`${styles.textbox_item}`}>
                        <span>Белки, г</span>
                        <span className='text_type_digits-default'>{ingredient.proteins}</span>
                    </li>
                    <li className={`${styles.textbox_item}`}>
                        <span>Жиры, г</span>
                        <span className='text_type_digits-default'>{ingredient.fat}</span>
                    </li>
                    <li className={`${styles.textbox_item}`}>
                        <span>Углеводы, г</span>
                        <span className='text_type_digits-default'>{ingredient.carbohydrates}</span>
                    </li>
                </ul>
            </section>
        </div>
    )
}

IngredientDetails.propTypes = {
    ingredient: ingredientPropType.isRequired
}

export default IngredientDetails;