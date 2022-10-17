import axios, { AxiosResponse } from "axios";
import TokenService from "./TokenService";
import { App } from "vue";
import VueAxios from "vue-axios";

class ApiService {
  public static vueInstance: App;

  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL = "http://127.0.0.1:8000/api";
  }

  public static setHeader() {
    ApiService.vueInstance.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${TokenService.getToken()}`;
    ApiService.vueInstance.axios.defaults.headers.common["Accept"] =
      "application/json";
  }

  public static get(url: string, parameter?: Promise<AxiosResponse>) {
    return ApiService.vueInstance.axios.get(url);
  }

  public static post<Type>(url: string, data: Type): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.post(url, data);
  }
}

export default ApiService;
