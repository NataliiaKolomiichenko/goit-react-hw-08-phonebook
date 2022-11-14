import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from "./RegisterForm.module.css";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(register({ name, email, password }));
    };

    return (
        <form className={css.form_container} onSubmit={handleSubmit}>
            <h2 className={css.form_title}>Register</h2>
            <label className={css.form_inputLabel}> Name
            <input
                className={css.form_input}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        
        <label className={css.form_inputLabel}> Login
            <input
                className={css.form_input}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="example@mail.com"
                required
            />
        </label>
            
        <label className={css.form_inputLabel}> Password
            <input
                className={css.form_input}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                min="7"
                title="The password must be at least 7 characters long"
                required
            />
        </label>
        
        <button type="submit" className={css.form_btn}>Register</button>
        </form>
    )
}

export default RegisterForm;