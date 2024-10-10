import axiosAPI from "../axiosBaseApi";

// user.js
export const registerAuthApi = async (data: {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  date_of_birth: string | null;
  gender: string;
}) => {
  return await axiosAPI.post("/users/register", data);
};
