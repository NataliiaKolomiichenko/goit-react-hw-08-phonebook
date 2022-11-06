import { useDispatch } from 'react-redux'
import { deleteContact } from 'redux/operations'
import PropTypes from 'prop-types'
import css from './ContactItem.module.css'

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return <li className={css.listItem}>{name}: {number} <button type="button" className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button></li>
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ContactItem