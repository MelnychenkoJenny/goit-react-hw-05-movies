import { Container } from 'components/App/App.styled';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <span>LOGO</span>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
