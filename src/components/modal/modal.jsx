import ReactDOM from "react-dom";

function Modal() {
    const modalRoot = document.getElementById("react-modals");

    return ReactDOM.createPortal((
        <div className="modal"></div>
    ), modalRoot);
}

export default Modal;