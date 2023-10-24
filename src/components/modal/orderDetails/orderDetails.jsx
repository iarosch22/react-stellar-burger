import styles from './orderDetails.module.css';
import ReactDOM from "react-dom";
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderDetails() {
    return (
        <div className={`${styles.container} p-10`}>
            <p className={`${styles.details} text text_type_digits-large`}>034536</p>
            <p className={`${styles.info} text text_type_main-default`}>идентификатор заказа</p>
            <CheckMarkIcon type="primary" />
            <p className={`${styles.status} text text_type_main-default`}>Ваш заказ начали готовить</p>
            <p className={`${styles.proposal} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;