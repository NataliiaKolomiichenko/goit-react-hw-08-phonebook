import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from "./UserMenu.module.css"

const UserMenu = () => {
    const { name } = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleClick = () => dispatch(logOut());

    return (
        <div>
            <p  className={css.userMenu_text}>Welcome, {name}</p>
            <button type="button" className={css.userButton} onClick={handleClick}>LogOut</button>
        </div>
    )
}

export default UserMenu;