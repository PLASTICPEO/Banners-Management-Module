import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// const axiosParams = {
//   baseURL: process.env.EXPO_PUBLIC_BASE_URL,
// };

export const axiosInstance = axios.create();

export const setAuthorizationHeader = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

const api = (httpClient: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      httpClient.get<T>(url, config),

    post: <T>(
      url: string,
      body: unknown = null,
      config: AxiosRequestConfig = {}
    ) => httpClient.post<T>(url, body, config),
  };
};

export default api(axiosInstance);
