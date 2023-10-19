import styles from './content.module.css';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import React from 'react';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';
import Modal from '../modal/modal';

function Content(props) {
    const dataIngredients = [
        {
           "_id":"60666c42cc7b410027a1a9b1",
           "name":"Краторная булка N-200i",
           "type":"bun",
           "proteins":80,
           "fat":24,
           "carbohydrates":53,
           "calories":420,
           "price":1255,
           "image":"https://code.s3.yandex.net/react/code/bun-02.png",
           "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
           "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
           "__v":0
        },
        {
           "_id":"60666c42cc7b410027a1a9b6",
           "name":"Биокотлета из марсианской Магнолии",
           "type":"main",
           "proteins":420,
           "fat":142,
           "carbohydrates":242,
           "calories":4242,
           "price":424,
           "image":"https://code.s3.yandex.net/react/code/meat-01.png",
           "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
           "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
           "__v":0
        },
        {
           "_id":"60666c42cc7b410027a1a9b8",
           "name":"Соус фирменный Space Sauce",
           "type":"sauce",
           "proteins":50,
           "fat":22,
           "carbohydrates":11,
           "calories":14,
           "price":80,
           "image":"https://code.s3.yandex.net/react/code/sauce-04.png",
           "image_mobile":"https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
           "image_large":"https://code.s3.yandex.net/react/code/sauce-04-large.png",
           "__v":0
        },
        {
           "_id":"60666c42cc7b410027a1a9bc",
           "name":"Плоды Фалленианского дерева",
           "type":"main",
           "proteins":20,
           "fat":5,
           "carbohydrates":55,
           "calories":77,
           "price":874,
           "image":"https://code.s3.yandex.net/react/code/sp_1.png",
           "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
           "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
           "__v":0
        },
        {
           "_id":"60666c42cc7b410027a1a9bb",
           "name":"Хрустящие минеральные кольца",
           "type":"main",
           "proteins":808,
           "fat":689,
           "carbohydrates":609,
           "calories":986,
           "price":300,
           "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
           "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
           "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
           "__v":0
        },
        {
           "_id":"60666c42cc7b410027a1a9ba",
           "name":"Соус с шипами Антарианского плоскоходца",
           "type":"sauce",
           "proteins":101,
           "fat":99,
           "carbohydrates":100,
           "calories":100,
           "price":88,
           "image":"https://code.s3.yandex.net/react/code/sauce-01.png",
           "image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
           "image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png",
           "__v":0
        }
      ]

    const [visibility, setVisibility] = React.useState(false);

    const handleOpenModal = () => {
        setVisibility(true);
    };

    const handleCloseModal = () => {
        setVisibility(false);
    };

    React.useEffect(() => {
        console.log(visibility);
    }, [visibility])

    const logTo = () => {
        console.log('close')
    }

    return (
      <>
         <main className={`${styles.content} pt-10`}>
            <BurgerIngredients data={[...props.data]}/>
            <BurgerConstructor data={dataIngredients} onOpen={handleOpenModal}/>
         </main>
         {
            visibility &&
            <Modal onClose={handleCloseModal} />
         }
      </>
      );
}


export default Content;