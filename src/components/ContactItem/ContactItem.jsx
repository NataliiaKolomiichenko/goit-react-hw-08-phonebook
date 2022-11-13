import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { deleteContact } from 'redux/contacts/operations'
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types'
import css from './ContactItem.module.css'

const ContactItem = ({ name, number, id }) => {
  const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () => {
    setShowModal(prevState => !prevState);
  }

    return <li className={css.listItem}><p className={css.contactItem_text}>{name}: {number}</p>
      <div><button type="button" className={css.btn} onClick={() => toggleModal()}>Change</button><button type="button" className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button></div>{showModal && <Modal onToggle={toggleModal} id={id} name={name} number={number} />}</li>
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem