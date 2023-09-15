import styles from "./modal.module.css"
import ReactDOM from "react-dom";
import ModalOverlay from "./modalOverlay/modalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Modal() {
    const modalRoot = document.getElementById("react-modals");

    return ReactDOM.createPortal((
        <>
            <ModalOverlay />
            <div className={`${styles.modal}`}>
                <CloseIcon type="primary" className={`${styles.icon}`} />
                <div className={`${styles.container}`}></div>
            </div>
        </>

    ), modalRoot);
}

export default Modal;