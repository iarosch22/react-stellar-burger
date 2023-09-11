import styles from './burgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ingredientPropType from '../../utils/prop-types';
import React from 'react';

function BurgerConstructor( { data } ) {
    const [ingredients, setIngredients] = React.useState(data);

    const totalPrice = ingredients.reduce((prev, obj) => {
        return prev + obj.price;
    }, 0);

    return (
        <section className={`${styles.constructorBox} pt-15`}>
            <div className={`${styles.bunBox}`}>
                {
                    ingredients.map(item => {
                        if(item.type === 'bun') {
                            return <ConstructorElement key={item._id} type='top' isLocked={true} text={`${item.name} (вверх)`} price={item.price} thumbnail={item.image} />
                        }
                    })
                }
            </div>
            <div className={`${styles.mainBox} custom-scroll`}>
                {
                    ingredients.map(item => {
                        if(item.type !== 'bun') {
                            return <ConstructorElement key={item._id} text={item.name} price={item.price} thumbnail={item.image} />
                        }
                    })
                }
            </div>
            <div className={`${styles.bunBox}`}>
            {
                    ingredients.map(item => {
                        if(item.type === 'bun') {
                            return <ConstructorElement key={item._id} type='bottom' isLocked={true} text={`${item.name} (низ)`} price={item.price} thumbnail={item.image} />
                        }
                    })
                }
            </div>
            <div className={`${styles.btnBox}`}>
                <span className={`${styles.priceBox} text text_type_digits-medium`}>{totalPrice}<CurrencyIcon type="primary" /></span>
                <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType).isRequired
};

export default BurgerConstructor;