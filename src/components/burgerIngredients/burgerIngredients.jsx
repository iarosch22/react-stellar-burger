import TabBox from './tabBox/tabBox';
import styles from './burgerIngredients.module.css';
import Bread from '../bread/bread';
import Sauce from '../sauce/sauce';

function BurgerIngredients() {
    return (
        <section className={`${styles.burgerBox} pb-10`}>
            <h1 className='text text_type_main-large'>Соберите бургер</h1>
            <TabBox />
            <div className={`${styles.ingredients} custom-scroll`}>
                <Bread />
                <Sauce />
            </div>
        </section>
    )
}

export default BurgerIngredients;