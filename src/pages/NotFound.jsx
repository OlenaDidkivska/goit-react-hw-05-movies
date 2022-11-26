import { NavLinkStyled } from 'components/Header/Header.styled';

const NotFound = () => {
  return (
    <>
      <h1>NotFound</h1>
      <div>
        Go to <NavLinkStyled to="/">Home</NavLinkStyled> page
      </div>
    </>
  );
};

export default NotFound;
