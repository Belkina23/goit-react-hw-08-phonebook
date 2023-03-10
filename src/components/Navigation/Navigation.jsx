import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Navigation = () => {
  const {isLoggedIn} = useAuth();

  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">Contacts</NavLink>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};