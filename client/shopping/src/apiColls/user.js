// const { axiosInstance } = require()
import axiosInstance from "./index";

const logInUser = async (payload) => {
  try {
    const response = await axiosInstance.post("http://localhost:8080/user/signin", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default logInUser;

