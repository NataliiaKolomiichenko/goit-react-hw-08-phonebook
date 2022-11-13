import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import css from "./PagesStyle.module.css"


const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    
    return (
    <div className={css.contact_container}>
        <h2 className={css.contact_title}>Phonebook</h2>      
        <ContactForm />
        <h2 className={css.contact_title}>Contacts</h2>
        <Filter />
        {isLoading && !error && <p>Loading contacts...</p>}
        <ContactList />
    </div>)
}

export default Contacts;