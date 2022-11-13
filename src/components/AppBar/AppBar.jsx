import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from "redux/auth/selectors";
import css from "./AppBar.module.css"

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={css.appBar_container}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}            
        </div>
        
    )
}

export default AppBar;