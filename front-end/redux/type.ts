import { AxiosRequestConfig } from "axios";

export const API_CONFIG: AxiosRequestConfig = {
  // withCredentials: true,
  timeout: 30000,
  baseURL: process.env.API_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
}
export interface TypeCount {
  page: string;
  count: number;
}
