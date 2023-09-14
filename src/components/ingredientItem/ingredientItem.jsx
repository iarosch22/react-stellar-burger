import styles from './indgredientItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ingredientPropType from '../../utils/prop-types';

function IndgredientItem( { ingredient } ) {
    return (
        <div className={`${styles.item} pb-6`} key={ingredient._id}>
            <img src={ingredient.image} alt="" className={`${styles.img}`} />
            <p className={`${styles.pricebox}`}>
                <span className='text text_type_digits-default'>{ingredient.price}</span><CurrencyIcon type="primary" />
            </p>
            <p className={`${styles.description} text text_type_main-default`}>{ingredient.name}</p>
            {/* {count ? <Counter count={count} size="default" extraClass="m-1" /> : null} */}
        </div>
    )
}

export default IndgredientItem;