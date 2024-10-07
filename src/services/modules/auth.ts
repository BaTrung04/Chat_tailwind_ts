import axiosAPI from "../axiosBaseApi";
interface RefreshTokenResponse {
  accessToken: string;
}
//Auth
//[LOGIN_LOGOUT_REFRESH_TOKEN]
//[POST LOGIN]
export const loginAuthApi = async (data: any) => {
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
