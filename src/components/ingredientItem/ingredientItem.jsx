import styles from './indgredientItem.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function IndgredientItem( { _id, image, price, name, count = 0 } ) {
    return (
        <div className={`${styles.item} pb-6`} key={_id}>
            <img src={image} alt="" className={`${styles.img}`} />
            <p className={`${styles.pricebox}`}>
                <span className='text text_type_digits-default'>{price}</span><CurrencyIcon type="primary" />
            </p>
            <p className={`${styles.description} text text_type_main-default`}>{name}</p>
            {count ? <Counter count={count} size="default" extraClass="m-1" /> : null}
        </div>
    )
}

IndgredientItem.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
};

export default IndgredientItem;