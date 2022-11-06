import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { useState } from 'react';
import css from './ContactForm.module.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    addNewContact(name);
  };

  const addNewContact = (contactName) => {
    const normalizedNameNewContract = contactName.toLowerCase();
    const contactNames = contacts.map(contact => {
      const contactName = contact.name;
      return contactName.toLowerCase()
    })
    if (contactNames.includes(normalizedNameNewContract)) {
      return alert(`${name} is already in contacts.`)
    }
      
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('')
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget
    
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    };
  };

  return <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.inputLabel}> Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
        </label>
        
        <label className={css.inputLabel}> Phone number
            <input
              className={css.input}
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </label>
        
        <button type="submit" className={css.btn}>Add contact</button>
      </form>
    
}

export default ContactForm;