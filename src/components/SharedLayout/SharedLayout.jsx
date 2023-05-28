import { Container } from 'components/App/App.styled';
import Loading from 'components/Loading/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavLinkStyles, NavList } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavList>
              <li>
                <NavLinkStyles to="/" end>
                  Home
                </NavLinkStyles>
              </li>
              <li>
                <NavLinkStyles to="/movies">Movies</NavLinkStyles>
              </li>
            </NavList>
          </nav>
        </Container>
      </Header> 
      <Suspense fallback={<Loading/>}>
      <Container> <main> <Outlet /></main></Container>
      </Suspense>
    </>
  );
};
