import { useEffect } from "react";
import { AsideUseCases } from "./usecases/use-cases";

function Aside() {

  const { GetUsersData, dataUser, username } = AsideUseCases()

  useEffect(() => {
    GetUsersData()
  }, [username])

  return (
    <>
      <h1>ASIDE!</h1>
    </>
  )
}

export { Aside };

