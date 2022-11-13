import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from "redux/auth/selectors";
import css from "./Navigation.module.css"

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav    >
            <NavLink to="/" className={css.nav_link}>Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts" className={css.nav_link}>Contacts</NavLink>}
        </nav>
    )
}