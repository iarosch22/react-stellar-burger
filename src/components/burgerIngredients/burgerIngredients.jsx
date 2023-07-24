import Ingredients from '../ingredients/ingredients';
import TabBox from '../tabBox/tabBox';
import styles from './burgerIngredients.module.css';

function BurgerIngredients() {
    return (
        <section className={`${styles.burgerBox}`}>
            <h1 className='text text_type_main-large'>Соберите бургер</h1>
            <TabBox />
            <Ingredients />
        </section>
    )
}

export default BurgerIngredients;