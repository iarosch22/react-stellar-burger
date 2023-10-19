import styles from "./modal.module.css"
import ReactDOM from "react-dom";
import ModalOverlay from "./modalOverlay/modalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Modal(props) {
    const modalRoot = document.getElementById("react-modals");

    return ReactDOM.createPortal((
        <>
            <ModalOverlay onClose={props.onClose}/>
            <div className={`${styles.modal}`}>
                <span className={`${styles.icon}`} onClick={props.onClose}>
                    <CloseIcon type="primary" />
                </span>
            </div>
        </>

    ), modalRoot);
}

export default Modal;