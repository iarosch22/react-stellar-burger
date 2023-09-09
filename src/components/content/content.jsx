import styles from './content.module.css';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import React from 'react';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';

function Content(props) {
    const [data, setData] = React.useState([...props.data]);

    return (
        <main className={`${styles.content} pt-10`}>
            <BurgerIngredients data={data}/>
            <BurgerConstructor/>
        </main>
      );
}


export default Content;