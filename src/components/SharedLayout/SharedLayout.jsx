import Loading from 'components/Loading/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  ContainerMain,
  Header,
  NavItem,
  NavLinkStyles,
  NavList,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavList>
              <NavItem>
                <NavLinkStyles to="/" end>
                  Home
                </NavLinkStyles>
              </NavItem>
              <NavItem>
                <NavLinkStyles to="/movies">Movies</NavLinkStyles>
              </NavItem>
            </NavList>
          </nav>
        </Container>
      </Header>
      <Suspense fallback={<Loading />}>
        <main>
          {' '}
          <ContainerMain>
            <Outlet />
          </ContainerMain>
        </main>
      </Suspense>
    </>
  );
};
