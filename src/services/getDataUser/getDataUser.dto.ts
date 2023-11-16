interface GetUserDataOutputDto {
  login: string;
  avatar_url: string;
  type: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export type { GetUserDataOutputDto };

