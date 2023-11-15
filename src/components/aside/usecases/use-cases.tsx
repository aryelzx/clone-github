import { useState } from "react";
import { useParams } from "react-router-dom";
import { GetUserDataOutputDto } from "../../../services/getDataUser/getDataUser.dto";
import { useGetUserData } from "../../../services/getDataUser/getDataUser.service";

function AsideUseCases() {
  const [dataUser, setDataUser] = useState<GetUserDataOutputDto>({} as GetUserDataOutputDto);
  const { username } = useParams()
  console.log(username)

  const GetUsersData = async () => {
    try {
      const result = await useGetUserData.execute(username)
      console.log(result)
      setDataUser(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    {
      GetUsersData,
      username,
      dataUser,
    }
  )
}


export { AsideUseCases };

