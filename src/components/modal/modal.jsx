import styles from "./modal.module.css"
import ReactDOM from "react-dom";
import ModalOverlay from "./modalOverlay/modalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function Modal( { onClose, children } ) {
    const modalRoot = document.getElementById("react-modals");

    React.useEffect(() => {
        const closeByEsc = e => {
            if(e.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', closeByEsc)

        return () => {
            document.removeEventListener('keydown', closeByEsc)
        }
    }, [onClose])

    return ReactDOM.createPortal((
        <>
            <ModalOverlay onClose={onClose}/>
            <div className={`${styles.modal}`}>
                <span className={`${styles.icon}`} onClick={onClose}>
                    <CloseIcon type="primary" />
                </span>
                {children}
            </div>
        </>

    ), modalRoot);
}

export default Modal;