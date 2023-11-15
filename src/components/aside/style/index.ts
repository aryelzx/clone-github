import { styled } from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  border-right: 1px solid gray;
  
  `;

export const Header = styled.header`
  height: 342px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2rem;

`;
export const Paragraph = styled.p`
  color: #000;

  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
`;
export const SpanHead = styled.span`
  padding: 3px;
  margin-left: 3px;
  color: #fff;
  width: 38px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #FF8412;
`;
export const ProfilePicture = styled.img`
  display: flex;
  margin: 2rem;
  width: 95.424px;
  height: 95.481px;
  border-radius: 75.481px;
  border: 1px solid #FFA0A0;
`;
export const Name = styled.p`
  color: #16191A;

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px 0px 4px 0px;
`;
export const UserName = styled.p`
  color: rgba(22, 25, 26, 0.30);

  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 16px;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 8px;
  `;

export const Infor = styled.p`
  color: rgba(22, 25, 26, 0.80);

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Description = styled.p`
  color: rgba(22, 25, 26, 0.50);

  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Divider = styled.span`
width: 188px;
height: 3px;
border-radius: 100px;
background: rgba(229, 229, 229, 0.50);
`

export const FollowButton = styled.button`
width: 188px;
height: 24px;
border-radius: 4px;
background: #FF8412;
margin-bottom: 25px;
`;

export const TextButton = styled.p`
color: #FFF;

font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const About = styled(Header)`
  height: 250px;
`;

export const Bio = styled.p`
  color: rgba(22, 25, 26, 0.50);

  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  margin-bottom: 41px;
`
export const Contact = styled.div`
  `
export const IconImages = styled.img`
  width: 9px;
  height: 12px;
`;
export const Locality = styled.div`
  display: flex;
  gap: 10px;
  color: rgba(22, 25, 26, 0.50);

  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`
export const Email = styled(Locality)``
export const Company = styled(Locality)``

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;