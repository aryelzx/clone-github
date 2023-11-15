import { useEffect } from "react";
import Vector from "../../shared/images/Vector.png";
import Email from "../../shared/images/envelope-solid 1.png";
import MapMarket from "../../shared/images/map-marker-alt-solid 1.png";
import * as S from "./style";
import { AsideUseCases } from "./usecases/";

function Aside() {
  const { GetUsersData, dataUser, username } = AsideUseCases();

  useEffect(() => {
    GetUsersData();
  }, [username]);

  return (
    <>
      <S.Content>
        <S.Header>
          <S.Paragraph>Git<S.SpanHead>Hub</S.SpanHead></S.Paragraph>
          <S.ProfilePicture src={dataUser.avatar_url} alt="profile picture" />
          <S.Name>{dataUser.name}</S.Name>
          <S.UserName>{dataUser.login}</S.UserName>
          <S.Section>
            <S.SectionText>
              <S.Infor>{dataUser.followers}</S.Infor>
              <S.Description>Followers</S.Description>
            </S.SectionText>
            <S.SectionText>
              <S.Infor>{dataUser.following}</S.Infor>
              <S.Description>Followings</S.Description>
            </S.SectionText>
            <S.SectionText>
              <S.Infor>{dataUser.public_repos}</S.Infor>
              <S.Description>Repos</S.Description>
            </S.SectionText>
          </S.Section>
          <S.Divider />
        </S.Header>
        <S.About>
          <S.FollowButton>
            <S.TextButton>Follwing</S.TextButton>
          </S.FollowButton>
          <S.Bio>
            {dataUser.bio ? dataUser.bio : 'No bio yet...'}
          </S.Bio>
          <S.Contact>
            <S.Locality>
              <S.IconImages src={MapMarket} alt="location image" />
              {dataUser.location ? dataUser.location : 'No location yet'}
            </S.Locality>
            <S.Email>
              <S.IconImages src={Email} alt="location image" />
              {dataUser.email ? dataUser.email : 'No email yet'}
            </S.Email>
            <S.Company>
              <S.IconImages src={Vector} alt="location image" />
              {dataUser.company ? dataUser.company : 'No company yet'}
            </S.Company>
          </S.Contact>
        </S.About >
        <S.Footer>
          <S.UserName>
            Block or Report
          </S.UserName>
        </S.Footer>
      </S.Content>
    </>
  );
}

export { Aside };

