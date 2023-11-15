import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserData } from "../../services/getDataUser.service";
function AsideUseCases() {
  const [dataUser, setDataUser] = useState()

  const { username } = useParams();

  const GetUsersData = async () => {

    try {
      console.log(username, 'useeer')
      const params = username;
      const result = await useGetUserData.execute(params)
      console.log(result)
      setDataUser(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    {
      GetUsersData,
      dataUser,
      username,
    }
  )
}


export { AsideUseCases };

