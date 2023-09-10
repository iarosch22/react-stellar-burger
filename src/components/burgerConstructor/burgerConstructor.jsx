import styles from './burgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

function BurgerConstructor(props) {
    const orderList = [];

    props.data.map(item => {
        if(item.__v > 0) {
            for (let i = 0; i < item.__v; i++) {
                orderList.push(item);
            }
        }
    });

    const totalPrice = orderList.reduce((prev, obj) => {
        return prev + obj.price;
    }, 0);

    return (
        <section className={`${styles.constructorBox} pt-15`}>
            <div className={`${styles.bunBox}`}>
                {
                    orderList.map(item => {
                        if(item.type === 'bun' && item.__v) {
                            return <ConstructorElement type='top' isLocked={true} text={`${item.name} (вверх)`} price={item.price} thumbnail={item.image} />
                        }
                    })
                }
            </div>
            <div className={`${styles.mainBox} custom-scroll`}>
                {
                    orderList.map(item => {
                        if(item.type !== 'bun' && item.__v) {
                            return <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
                        }
                    })
                }
            </div>
            <div className={`${styles.bunBox}`}>
            {
                    orderList.map(item => {
                        if(item.type === 'bun' && item.__v) {
                            return <ConstructorElement type='bottom' isLocked={true} text={`${item.name} (низ)`} price={item.price} thumbnail={item.image} />
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

export default BurgerConstructor;