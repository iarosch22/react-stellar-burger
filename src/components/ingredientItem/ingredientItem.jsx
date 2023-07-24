import styles from './indgredientItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function IndgredientItem(props) {
    return (
        <div className={`${styles.item} pb-6`} key={props._id}>
            <img src={props.image} alt="" className={`${styles.img}`} />
            <p className={`${styles.pricebox}`}>
                <span className='text text_type_digits-default'>{props.price}</span><CurrencyIcon type="primary" />
            </p>
            <p className={`${styles.description} text text_type_main-default`}>{props.name}</p>
        </div>
    )
}

export default IndgredientItem;