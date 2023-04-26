import styled from "styled-components";

export const GridWrapper = styled.ul`
display: grid;
grid-template-columns: repeat(7, 1fr);
border-radius: 8px;
border: 1px solid rgba(220, 227, 229, 0.5);
padding-left: 0;
margin-bottom: 14px;`;

export const CellWrapper = styled.li`
min-width: 48px;
height: 50px;
background: #FFFFFF;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 1.12;
text-align: center;
text-transform: uppercase;
color: ${props => props.weekend ? '#3E85F3' : '#616161'};
display: flex;
align-items: center;
justify-content: center;
`;