import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:3000";

interface User {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  [key: string]: any; 
}

export const register = (username: string, password: string): Promise<AxiosResponse<void>> => {
  return axios.post<void>(`${API_URL}/register`, { username, password });
};

export const login = (username: string, password: string): Promise<LoginResponse> => {
    return axios
      .post<LoginResponse>(`${API_URL}/login`, { username, password })
      .then((response: AxiosResponse<LoginResponse>) => {
        if (response.data.token) {
          // Stocke le token et le nom d'utilisateur
          localStorage.setItem("user", JSON.stringify({
            token: response.data.token,
            username: response.data.username
          }));
        }
        return response.data;
      });
  };
  

export const logout = (): void => {
  localStorage.removeItem("user");
};

export const getCurrentUser = (): LoginResponse | null => {
  const user = localStorage.getItem("user");
  return user ? (JSON.parse(user) as LoginResponse) : null;
};
  


