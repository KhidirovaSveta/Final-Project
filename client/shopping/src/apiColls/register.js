import axiosInstance from "./index";

const registerUser = async (payload) => {
  try {
    console.log("test");
    const response = await axiosInstance.post("http://localhost:8080/user/signup", payload);
    console.log(response);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default registerUser;
