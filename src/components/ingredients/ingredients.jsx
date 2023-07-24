import Bread from '../bread/bread';
import styles from './ingredients.module.css';

function Ingredients() {
    return(
        <div className={`${styles.ingredients}`}>
            <Bread />
        </div>
    )
}

export default Ingredients;