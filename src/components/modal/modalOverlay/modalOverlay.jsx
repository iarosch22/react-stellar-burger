import styles from "./modalOverlay.module.css";
import { PropTypes } from 'prop-types';

function ModalOverlay( { onClose } ) {
    return(
        <div className={`${styles.overlay}`} onClick={onClose}>
        </div>
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ModalOverlay;