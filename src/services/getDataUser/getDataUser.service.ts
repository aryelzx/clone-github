import { AxiosInstance } from 'axios';
import { http } from '../../shared/api/http';
import { GetUserDataOutputDto } from "./getDataUser.dto";

class GetUserData {
  constructor(private readonly api: AxiosInstance) { }

  async execute(params?: string): Promise<GetUserDataOutputDto> {
    const result = await this.api.get(`${params}`)

    return result.data
  }

}

const useGetUserData = new GetUserData(http)

export { GetUserData, useGetUserData };

