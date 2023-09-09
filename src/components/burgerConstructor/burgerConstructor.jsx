import styles from './burgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {
    const orderList = [];

    props.data.map(item => {
        if(item.__v > 0) {
            for (let i = 0; i < item.__v; i++) {
                orderList.push(item);
            }
        }
    });

    console.log(orderList);

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
        </section>
    )
}

export default BurgerConstructor;