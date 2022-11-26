import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #091114;
  box-shadow: 0px 0.1px 5px 1px #0b2336;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #2a58b1;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);
  transform: scale(0.9);
  &:hover,
  &:focus {
    color: #ffffff;
  }
  &.active {
    color: #ffffff;
    background-color: #2a58b1;
    padding: 6px 12px;
    border-radius: 4px;
    transform: scale(1);
    pointer-events: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 28px;
`;
