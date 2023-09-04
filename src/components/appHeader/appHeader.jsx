import styles from './appheader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Nav from './nav/nav';
import UserBox from './userBox/userBox';

function AppHeader() {
    return (
      <header className={`${styles.header}`}>
        <Nav />
        <Logo />
        <UserBox />
      </header>
    );
}

export default AppHeader;