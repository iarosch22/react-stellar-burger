import styles from './tabBox.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

function TabBox() {
    const [current, setCurrent] = React.useState('bun');

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      };

    return(
        <div className={`${styles.tabBox} mt-5 mb-20`}>
            <Tab value="bun" active={current === 'bun'} onClick={setTab}>Булки</Tab>
            <Tab value="sause" active={current === 'sause'} onClick={setTab}>Соусы</Tab>
            <Tab value="filling" active={current === 'filling'} onClick={setTab}>Начинки</Tab>
        </div>
    )
}

export default TabBox;