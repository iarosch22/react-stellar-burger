import TabBox from './tabBox/tabBox';
import styles from './burgerIngredients.module.css';
import IndgredientItem from '../ingredientItem/ingredientItem';
import React from 'react';

function BurgerIngredients(props) {
    const [ingredients, setIngredients] = React.useState(props.data);

    return (
        <section className={`${styles.burgerBox} pb-10`}>
            <h1 className='text text_type_main-large'>Соберите бургер</h1>
            <TabBox />
            <div className={`${styles.ingredients} custom-scroll`}>

            <section className={`${styles.menuBox}`}>
                <h2 className='text text_type_main-medium'>Булки</h2>
                <div className={`${styles.menu}`}>
                    {
                        props.data.map(item => {
                            if(item.type === "bun") {
                                return <IndgredientItem _id={item._id} image={item.image} price={item.price} name={item.name} count={item.__v} key={item._id} />
                            }

                            return null;
                        })
                    }
                </div>
            </section>

            <section className={`${styles.menuBox} mt-20`}>
                <h2 className='text text_type_main-medium'>Соусы</h2>
                <div className={`${styles.menu}`}>
                    {
                        props.data.map(item => {
                            if(item.type === "sauce") {
                                return <IndgredientItem _id={item._id} image={item.image} price={item.price} name={item.name} count={item.__v} key={item._id} />
                            }

                            return null;
                        })
                    }
                </div>
            </section>

            <section className={`${styles.menuBox}`}>
                <h2 className='text text_type_main-medium'>Начинки</h2>
                <div className={`${styles.menu}`}>
                    {
                        props.data.map(item => {
                            if(item.type === "main") {
                                return <IndgredientItem _id={item._id} image={item.image} price={item.price} name={item.name} count={item.__v} key={item._id} />
                            }

                            return null;
                        })
                    }
                </div>
            </section>
            </div>
        </section>
    )
}

export default BurgerIngredients;