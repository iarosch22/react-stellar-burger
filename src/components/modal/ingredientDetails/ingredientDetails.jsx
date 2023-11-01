import styles from './ingredientDetails.module.css';

function IngredientDetails( { name, image_large, calories, proteins, fat, carbohydrates } ) {
    return (
        <div className={`${styles.container} pt-10 pl-10 pr-10 pb-15`}>
            <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
            <img src={image_large} alt="image of indredient" />
            <section className={`${styles.details}`}>
                <h3 className={`${styles.name} text text_type_main-medium`}>{name}</h3>
                <ul className={`${styles.textbox} text text_type_main-default text_color_inactive`}>
                    <li className={`${styles.textbox_item}`}>
                        <span>Калории, ккал</span>
                        <span className='text_type_digits-default'>{calories}</span>
                    </li>
                    <li className={`${styles.textbox_item}`}>
                        <span>Белки, г</span>
                        <span className='text_type_digits-default'>{proteins}</span>
                    </li>
                    <li className={`${styles.textbox_item}`}>
                        <span>Жиры, г</span>
                        <span className='text_type_digits-default'>{fat}</span>
                    </li>
                    <li className={`${styles.textbox_item}`}>
                        <span>Углеводы, г</span>
                        <span className='text_type_digits-default'>{carbohydrates}</span>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default IngredientDetails;