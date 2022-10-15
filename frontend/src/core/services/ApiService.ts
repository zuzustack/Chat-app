import axios from "axios";
import { App } from "vue";
import VueAxios from "vue-axios";

class ApiService {
  public static vueInstance: App;

  public static init(app: App<Element>) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL = process.env.API_URL;
  }

  public static get(url: string, parameter?: string) {
    ApiService.vueInstance.axios.get(url);
  }

  public static post<Type>(url: string, data: Type) {
    ApiService.vueInstance.axios.post(url, data);
  }
}
