import styles from './ingredientDetails.module.css';

function IngredientDetails( { name } ) {
    return (
        <div className={`${styles.container} pt-10 pl-10 pr-10 pb-15`}>
            <h2 className={`${styles.title}`}>Детали ингредиента</h2>
            <img src={image_large} alt="image of indredient" />
            <section className={`${styles.itembox}`}>
                <h3 className={`${styles.name}`}>{name}</h3>
                <div className={`${styles.infobox}`}></div>
            </section>
        </div>
    )
}

export default IngredientDetails;