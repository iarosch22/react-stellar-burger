import BreadMenu from '../breadMenu/breadMenu';
import styles from './bread.module.css';

function Bread() {
    return(
        <div className={`${styles.bread}`}>
            <h2 className='text text_type_main-medium'>Булки</h2>
            <BreadMenu />
        </div>
    )
}

export default Bread;