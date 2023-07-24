import IndgredientItem from '../ingredientItem/ingredientItem';
import styles from './breadMenu.module.css';
import { data } from '../../utils/data';

function BreadMenu() {
    const bunList = data.filter(item => item.type === 'bun');

    return(
        <div className={`${styles.menu}`}>
            {
                bunList.map(item => (
                    <IndgredientItem _id={item._id} image={item.image} price={item.price} name={item.name} key={item._id} />
                ))
            }
        </div>
    )
}

export default BreadMenu;