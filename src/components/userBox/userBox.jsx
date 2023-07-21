import styles from './userbox.module.css';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function UserBox() {
    return (
        <a href="#" className={`${styles.userbox} text text_color_inactive pt-4 pl-5 pb-4`}>
          <ProfileIcon type="secondary" />
          Личный кабинет
        </a>
      );
}


export default UserBox;