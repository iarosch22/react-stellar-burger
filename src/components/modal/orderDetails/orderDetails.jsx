import styles from './orderDetails.module.css';
import ReactDOM from "react-dom";
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderDetails() {
    return (
        <div className={`${styles.container} p-10`}>
            <div className={`${styles.heading}`}>
                <h2 className={`${styles.title} text text_type_digits-large`}>034536</h2>
                <p className={`${styles.subtitle} text text_type_main-default`}>идентификатор заказа</p>
            </div>
            <span className={`${styles.iconbox}`}>
                <CheckMarkIcon type="primary" />
            </span>
            <div className={`${styles.textblock}`}>
                <p className={`${styles.status} text text_type_main-default`}>Ваш заказ начали готовить</p>
                <p className={`${styles.proposal} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
            </div>
        </div>
    )
}

export default OrderDetails;