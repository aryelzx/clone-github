import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../nav";
import { OptionsNavMain } from "./mocks/options";
import * as S from "./style/";
import { MainUseCases } from "./usecases";

function Main() {
  const { GetRepoUsers, username, repos } = MainUseCases();
  useEffect(() => {
    GetRepoUsers()
  }, [username])

  const navigate = useNavigate()

  return (
    <>
      <S.Container>
        <Nav />
        <S.Body>
          <S.Options>
            {OptionsNavMain.map((options) => (
              <p key={options}>{options}</p>
            ))}
          </S.Options>
          <S.Title>
            Popular Repositories
          </S.Title>
          <S.RepositoriesContainer>
            {repos.map((repo) => (
              <S.CardRepositorie
                key={repo.id}
                onClick={() => navigate(`${repo.html_url}`)}>
                <S.CardTitle>
                  {repo.name}
                </S.CardTitle>
                <S.CardDescription>
                  {repo.description}
                </S.CardDescription>
                <S.CardLanguage>
                  <S.Pointer />
                  {repo.language}
                </S.CardLanguage>
              </S.CardRepositorie>
            ))}
          </S.RepositoriesContainer>
        </S.Body>
      </S.Container>
    </>
  )
}

export default Main