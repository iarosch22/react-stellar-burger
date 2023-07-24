import styles from './sauceMenu.module.css';
import IndgredientItem from '../ingredientItem/ingredientItem';
import { data } from '../../utils/data';

function SauceMenu() {
    const sauseList = data.filter(item => item.type === 'sauce');

    return(
        <div className={`${styles.menu}`}>
            {
                sauseList.map(item => (
                    <IndgredientItem _id={item._id} image={item.image} price={item.price} name={item.name} key={item._id} />
                ))
            }
        </div>
    )
}

export default SauceMenu;