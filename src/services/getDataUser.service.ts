import { AxiosInstance } from 'axios';
import { http } from "../api/http";
import { GetUserDataInputDto } from "./getDataUser.dto";

class GetUserData {
  constructor(private readonly api: AxiosInstance) { }

  async execute(params: GetUserDataInputDto) {
    const result = await this.api.get(`${params}`)

    return result.data
  }

}

const useGetUserData = new GetUserData(http)

export { GetUserData, useGetUserData };

