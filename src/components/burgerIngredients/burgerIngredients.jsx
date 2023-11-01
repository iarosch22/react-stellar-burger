import TabBox from './tabBox/tabBox';
import styles from './burgerIngredients.module.css';
import IndgredientItem from '../ingredientItem/ingredientItem';
import React from 'react';
import { PropTypes } from 'prop-types';
import ingredientPropType from '../../utils/prop-types';

function BurgerIngredients( { data, openIngredient } ) {
    const [ingredients, setIngredients] = React.useState(data);

    return (
        <section className={`${styles.burgerBox} pb-10`}>
            <h1 className='text text_type_main-large'>Соберите бургер</h1>
            <TabBox />
            <div className={`${styles.ingredients} custom-scroll`}>

                <section className={`${styles.menuBox}`}>
                    <h2 className='text text_type_main-medium' id='bun'>Булки</h2>
                    <div className={`${styles.menu}`}>
                        {
                            ingredients.map(item => {
                                if(item.type === "bun") {
                                    return <IndgredientItem ingredient={item} key={item._id} openIngredient={openIngredient} />
                                }
                            })
                        }
                    </div>
                </section>

                <section className={`${styles.menuBox} mt-20`}>
                    <h2 className='text text_type_main-medium' id='sause'>Соусы</h2>
                    <div className={`${styles.menu}`}>
                        {
                            ingredients.map(item => {
                                if(item.type === "sauce") {
                                    return <IndgredientItem ingredient={item} key={item._id} openIngredient={openIngredient} />
                                }
                            })
                        }
                    </div>
                </section>

                <section className={`${styles.menuBox}`}>
                    <h2 className='text text_type_main-medium' id='filling'>Начинки</h2>
                    <div className={`${styles.menu}`}>
                        {
                            ingredients.map(item => {
                                if(item.type === "main") {
                                    return <IndgredientItem ingredient={item} key={item._id} openIngredient={openIngredient} />
                                }
                            })
                        }
                    </div>
                </section>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType).isRequired
};

export default BurgerIngredients;