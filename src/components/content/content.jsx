import styles from './content.module.css';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import React from 'react';

function Content(props) {
    const [data, setData] = React.useState([...props.data]);

    return (
        <main className={`${styles.content} pt-10`}>
            <BurgerIngredients data={data}/>
        </main>
      );
}


export default Content;