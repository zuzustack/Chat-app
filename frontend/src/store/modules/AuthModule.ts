import { Actions, Mutations } from "../enum/StoreEnum";
import ApiService from "@/core/services/ApiService";
import TokenService from "@/core/services/TokenService";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface UserAuth {
  name: string;
  photo_url: string;
}

export interface AuthClass {
  user: UserAuth;
  isLogin: boolean;
  errors: string | undefined;
}

@Module
export default class AuthModule extends VuexModule implements AuthClass {
  user = {
    name: "",
    photo_url: "",
  };
  isLogin = !!TokenService.getToken();
  errors = "";

  get statusLogin(): boolean {
    return this.isLogin;
  }

  get userAuth() {
    return this.user;
  }

  get errorAuth() {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_USER_AUTH](user: UserAuth) {
    this.user = user;
  }

  @Mutation
  [Mutations.SET_ERROR_LOGIN](error: string) {
    this.errors = error;
  }

  @Action
  [Actions.LOGIN_USER](data: any) {
    return ApiService.post("login", data)
      .then((data) => {
        console.log(data.data);
        if (data.data.status == 200) {
          TokenService.setToken(data.data.token);
          this.context.commit(Mutations.SET_USER_AUTH, data.data.user);
          this.context.commit(Mutations.SET_ERROR_LOGIN, undefined);
        } else {
          this.context.commit(Mutations.SET_ERROR_LOGIN, data.data.message);
        }
      })
      .catch((response) => {
        this.context.commit(Mutations.SET_ERROR_LOGIN, response);
      });
  }
}
