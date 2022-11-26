import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 480px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 5px;
  transition: transform 0.5s cubic-bezier(0, 0.11, 0.35, 2);
  overflow: hidden;
  cursor: zoom-in;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0.1px 5px 1px #0b2336;
  }
`;

export const Details = styled.div`
  display: flex;
  margin: 20px auto;
`;

export const Description = styled.div`
  padding: 20px;
`;

export const AddInfo = styled.section`
  padding: 20px;
`;
