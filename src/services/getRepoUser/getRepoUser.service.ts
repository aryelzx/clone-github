import { AxiosInstance } from "axios";
import { http } from "../../shared/api/http";
import { GetUserDataInputDto } from "../getDataUser/getDataUser.dto";
import { GetRepoUserOutputDto } from "./getRepoUser.dto";

class GetRepoUser {
  constructor(private readonly api: AxiosInstance) { }

  async execute(params: GetUserDataInputDto): Promise<GetRepoUserOutputDto> {
    const response = await this.api.get<GetRepoUserOutputDto>(`${params}/repos`)
    return response.data

  }
}

const useGetRepoUser = new GetRepoUser(http)

export { GetRepoUser, useGetRepoUser };

