import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css"

export const AuthNav = () => {
    return (
        <nav>
            <NavLink to="/register" className={css.nav_link}>Registration</NavLink>
            <NavLink to="/login" className={css.nav_link}>Login</NavLink>
        </nav>
    )
}