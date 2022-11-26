import { Container } from 'components/App.styled';
import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  return (
    <NavBar>
      <Container>
        <HeaderWrapper>
          <LinkWrapper>
            <NavLinkStyled to="/" end>
              Home
            </NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </LinkWrapper>
        </HeaderWrapper>
      </Container>
    </NavBar>
  );
};
