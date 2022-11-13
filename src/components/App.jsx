import { Suspense,  useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Route, Routes , Navigate} from 'react-router-dom';
import AppBar from './AppBar';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('../pages/Home'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Register = lazy(() => import('../pages/Register'))
const Login = lazy(() => import('../pages/Login'))

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} /> } />
            <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} /> } />
            <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} /> } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </Suspense>
    </>
  )
}

export default App