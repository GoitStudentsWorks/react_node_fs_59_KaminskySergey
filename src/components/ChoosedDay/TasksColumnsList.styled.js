import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  margin-top: 16px;
  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  @media screen and (min-width: 1280px) {
    gap: 27px;
  }
`;
