import { Actions, Mutations } from "../enum/StoreEnum";
import ApiService from "@/core/services/ApiService";
import TokenService from "@/core/services/TokenService";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

@Module
export default class ChatModule extends VuexModule {
  @Action
  getPermission() {
    ApiService.setHeader();
    return ApiService.get("user-chat")
      .then((data: any) => {
        return true;
      })
      .catch((response) => {
        return false;
      });
  }
}
