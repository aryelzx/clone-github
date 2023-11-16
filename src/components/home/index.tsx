import { Aside } from "../aside";
import Main from "../main";
import * as S from "./style";

function Home() {
  return (
    <S.Content>
      <Aside />
      <Main />
    </S.Content>
  )
}

export { Home };

