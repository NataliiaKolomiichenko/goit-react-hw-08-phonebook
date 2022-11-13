import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';
import { useState } from 'react';
import PropTypes from "prop-types";
import css from './ChangingContactForm.module.css'

const ChangingContactForm = ({ id, onToggle, prevName, prevNumber }) => {
  const [name, setName] = useState(prevName);
  const [number, setNumber] = useState(prevNumber);
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    updatedContact(name);
    onToggle()
  };

  const updatedContact = (contactName) => {
    const normalizedNameNewContract = contactName.toLowerCase();
    const contactNames = contacts.map(contact => {
      const contactName = contact.name;
      return contactName.toLowerCase()
    })
    if (contactNames.includes(normalizedNameNewContract)) {
      return alert(`${name} is already in contacts.`)
    }
      
    dispatch(updateContact({ id, name, number }));
    setName('');
    setNumber('')
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget
    
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    };
  };

  return <form className={css.changingForm} onSubmit={handleSubmit}>
        <label className={css.changingFormInputLabel}> Name
            <input
              className={css.changingFormInput}
              type="text"
              name="name"
              onChange={handleChange}
              defaultValue={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
        </label>
        
        <label className={css.changingFormInputLabel}> Phone number
            <input
              className={css.changingFormInput}
              type="tel"
              name="number"
              onChange={handleChange}
              defaultValue={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </label>
        <p>Please, change name or number</p>
        <button type="submit" className={css.changingFormBtn}>Change contact</button>
      </form>
    
}

ChangingContactForm.propTypes = {
  onToggle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  prevName: PropTypes.string.isRequired,
  prevNumber: PropTypes.string.isRequired,
}

export default ChangingContactForm;