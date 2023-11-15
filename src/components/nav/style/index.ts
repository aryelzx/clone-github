import { styled } from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 24px;
`;

export const Search = styled.div`
  width: fit;
`;

export const SearchInput = styled.input`
width: 300px;
height: 32px;
border-radius: 100px;
border: 1px solid #E5E5E5;
background: rgba(244, 244, 244, 0.15);

`;

export const InputText = styled.p`
color: rgba(22, 25, 26, 0.50);

font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Navbar = styled.div`
  display: flex;
  gap: 15px;
`
export const Options = styled.p`
color: rgba(22, 25, 26, 0.70);

font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 15px; 
cursor: pointer;

  &:hover{
    color: #FF8412
  }
`
export const Actions = styled.div`
  display: flex;
  gap: 15px;
`

export const StyledIcon = styled.div`
  color: #FF8412;
  font-size: 2rem; 
  cursor: pointer;
  width: fit;
  height: fit;
  transition: ease .3s;
  border-radius: 5px;
  
  &:hover{
    color: #fff;
    background-color: #FF8412;
  }
`