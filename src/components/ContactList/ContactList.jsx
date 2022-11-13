import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import ContactItem from '../ContactItem/ContactItem'
import css from './ContactList.module.css'

const ContactList = () => {
    const filteredContactsList = useSelector(selectVisibleContacts);

    return <ul className={css.list}>
        {filteredContactsList.map(({name, number, id}) => {
            return <ContactItem name={name} number={number} key={id} id={id} />
        })}
    </ul>
}

export default ContactList