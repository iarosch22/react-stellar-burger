import styles from './nav.module.css';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Nav() {
    return (
        <nav className={`${styles.nav}`}>
            <ul className={`${styles.list}`}>
                <li className={`${styles.item} pb-4 pt-4 pr-5`}>
                    <BurgerIcon type="primary" />
                    <span className='text'>Конструктор</span>
                </li>
                <li className={`${styles.item} pb-4 pt-4 pr-5`}>
                    <ListIcon type="secondary" />
                    <span className='text text_color_inactive'>Лента заказов</span>
                </li>
            </ul>
        </nav>
      );
}


export default Nav;