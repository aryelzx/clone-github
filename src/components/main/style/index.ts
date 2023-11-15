import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
`;

export const Body = styled.div`
  width: 100%;
`;

export const Options = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  color: rgba(22, 25, 26, 0.70);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 125% */

 p:first-child {
  color: #FF8412;
  border-bottom: 2px solid #FF8412;
 }
`;

export const Title = styled.p`
color: rgba(22, 25, 26, 0.50);
padding: 2rem;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 15px; /* 93.75% */
`;

export const RepositoriesContainer = styled.div`
 width: 100%;
 max-height: 350px;
 
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 justify-items: center;

 padding: 1rem;
 gap: 15px;

 overflow-y: scroll;
 scroll-behavior: smooth;
`;

export const CardRepositorie = styled.div`
  width: 251px;
  height: 120px;
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
 padding: 1rem;

 &:hover{
  transform: scale(1.1); 
  box-shadow: -1px 0px 14px 5px rgba(0,0,0,0.19);
  -webkit-box-shadow: -1px 0px 14px 5px rgba(0,0,0,0.19);
  -moz-box-shadow: -1px 0px 14px 5px rgba(0,0,0,0.19);
}
`;

export const CardTitle = styled.p`
  word-break: break-all;
  color: #FF8412;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
`;

export const CardDescription = styled.p`
  color: rgba(22, 25, 26, 0.70);

  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 15px;
`

export const Pointer = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: #FF8412;
`;

export const CardLanguage = styled.p`
  display: flex;
  text-align: center;
  gap: 8px;
  color: #16191A;

  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 15px;
`;
