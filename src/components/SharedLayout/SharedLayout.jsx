import Loading from 'components/Loading/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, ContainerMain, Header, NavLinkStyles, NavList } from './SharedLayout.styled';

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
      <main> <ContainerMain><Outlet /></ContainerMain></main>
      </Suspense>
    </>
  );
};
