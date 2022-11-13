import css from "./Modal.module.css"
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import ChangingContactForm from "components/ChangingContactForm";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onToggle, id, name, number }) => {

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown) };
  }, [onToggle])

  const handleBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      onToggle()
    }
  }

  return (createPortal(
      <div className={css.overlay} onClick={handleBackdrop}>
      <ChangingContactForm id={id} onToggle={onToggle} prevName={name} prevNumber={number} />
        </div>, modalRoot
    )
  )
}

Modal.propTypes = {
  onToggle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

export default Modal;