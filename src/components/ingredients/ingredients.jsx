import Bread from '../bread/bread';
import Sauce from '../sauce/sauce';
import styles from './ingredients.module.css';

function Ingredients() {
    return(
        <div className={`${styles.ingredients} custom-scroll`}>
            <Bread />
            <Sauce />
        </div>
    )
}

export default Ingredients;