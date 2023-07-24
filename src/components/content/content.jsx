import styles from './content.module.css';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';

function Content() {
    return (
        <main className={`${styles.content} pt-10`}>
            <BurgerIngredients />
        </main>
      );
}


export default Content;