import { useState } from "react";
import { GetRepoUserOutputDto } from "../../../services/getRepoUser/getRepoUser.dto";
import { useGetRepoUser } from "../../../services/getRepoUser/getRepoUser.service";
import { AsideUseCases } from "../../aside/usecases";

function MainUseCases() {
  const [repos, setRepos] = useState<GetRepoUserOutputDto[]>([]);

  const { username } = AsideUseCases();

  const GetRepoUsers = async () => {
    try {
      const result = await useGetRepoUser.execute(username)
      setRepos(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    {
      GetRepoUsers,
      repos,
      username
    }
  )
}


export { MainUseCases };

