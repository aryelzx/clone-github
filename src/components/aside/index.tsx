import { useEffect } from "react";
import { AsideUseCases } from "./use-cases";

function Aside() {

  const { GetUsersData, dataUser, usernameParams } = AsideUseCases()

  useEffect(() => {
    GetUsersData()
  }, [usernameParams])

  return (
    <>
      <h1>ASIDE!</h1>
    </>
  )
}

export { Aside };

