import styles from './tabBox.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

function TabBox() {
    const [current, setCurrent] = React.useState('bread');

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      };

    return(
        <div className={`${styles.tabBox} mt-5 mb-20`}>
            <Tab value="bread" active={current === 'bread'} onClick={setCurrent}>Булки</Tab>
            <Tab value="sause" active={current === 'sause'} onClick={setCurrent}>Соусы</Tab>
            <Tab value="filling" active={current === 'filling'} onClick={setCurrent}>Начинки</Tab>
        </div>
    )
}

export default TabBox;