import { Container } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';
import { NavLinkStyles } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <span>LOGO</span>
        <nav>
          <ul>
            <li>
              <NavLinkStyles to="/" end>
                Home
              </NavLinkStyles>
            </li>
            <li>
              <NavLinkStyles to="/movies">Movies</NavLinkStyles>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
