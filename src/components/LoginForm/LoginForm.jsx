import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from "./LoginForm.module.css"

const LoginForm = () => {
        const dispatch = useDispatch();

        const handleSubmit = e => {
            e.preventDefault();
            const form = e.currentTarget;
            dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
            );
            form.reset();
        };
    return (
        <form className={css.form_container} onSubmit={handleSubmit} autoComplete="off">
            <h2 className={css.form_title}>Login</h2>
                    
        <label className={css.form_inputLabel}> Login
            <input
                className={css.form_input}
                type="email"
                name="email"
                title="example@mail.com"
                required
            />
        </label>
            
        <label className={css.form_inputLabel}> Password
            <input
                className={css.form_input}
                type="password"
                name="password"
                min="6"
                title="The password must be at least 6 characters long"
                required
            />
        </label>
        
        <button type="submit" className={css.form_btn}>Login</button>
        </form>
    )
}

export default LoginForm;