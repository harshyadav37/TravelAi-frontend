import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const signupUser = async (userData: any) => {
  try {
    const response = await api.post("/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Error signing up user:", error);
    throw error;
  }
};
// jkhdgkjhhdkjhkd
export const loginUser = async (userData: any) => {
  try {
    const response = await api.post("/login", userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await api.post("/logout", {});
  } catch (error) {
    console.error("Error logging out user:", error);
    throw error;
  }
};

export default api;