import styles from './sauce.module.css';
import SauceMenu from '../sauceMenu/sauceMenu';

function Sauce() {
    return(
        <div className={`${styles.sauce} mt-20`}>
            <h2 className='text text_type_main-medium'>Соусы</h2>
            <SauceMenu />
        </div>
    )
}

export default Sauce;