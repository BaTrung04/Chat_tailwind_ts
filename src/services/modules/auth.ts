import axiosAPI from "../axiosBaseApi";
interface RefreshTokenResponse {
  accessToken: string;
}

interface AuthSecurity {
  accessToken: string;
}

interface loginAuthApi {
  accessToken: string;
  user: {
    isTwoFactorAuthenticationEnabled: boolean;
  };
}
//Auth
//[LOGIN_LOGOUT_REFRESH_TOKEN]
//[POST LOGIN]
export const loginAuthApi = async (data: {
  username: string;
  password: string;
}): Promise<loginAuthApi> => {
  return await axiosAPI.post("/auth/login", data);
};

//[GET REFRESH_TOKEN]
export const refreshTokenApi = async (): Promise<RefreshTokenResponse> => {
  const response = await axiosAPI.get<RefreshTokenResponse>("/auth/refresh");
  return response.data;
};

//[POST LOGOUT]
export const loyOutAuthApi = async () => {
  return await axiosAPI.post("/auth/logout");
};

//[GET TEXT_API_TOKEN]
export const TestApiCheckTokenAuth = async () => {
  return await axiosAPI.get("/auth/session");
};

//[POST TURN_OFF]
export const postAuthSecurity = async (code: {
  code: string;
}): Promise<AuthSecurity> => {
  return await axiosAPI.post("/auth/2fa/authenticate", code);
};
