import { CiBellOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { NavbarOptions } from './mocks/nav';

import * as S from "./style";

function Nav() {
  return (
    <S.Content>
      <S.Search>
        <FaSearch style={{ position: 'absolute', marginLeft: '10px', marginTop: '8px' }} />
        <S.SearchInput type="text" placeholder={`Search or Jump`} style={{ position: 'relative', paddingLeft: '30px' }} />
      </S.Search>
      <S.Navbar>
        {NavbarOptions.map((option) => (
          <S.Options key={option}>
            {option}
          </S.Options>
        ))}
      </S.Navbar>
      <S.Actions>
        <S.StyledIcon>
          <CiBellOn />
        </S.StyledIcon>
        <S.StyledIcon>
          <HiOutlineUserCircle />
        </S.StyledIcon>
      </S.Actions>
    </S.Content>
  )
}

export { Nav };

