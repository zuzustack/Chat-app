import { Actions, Mutations } from "../enum/StoreEnum";
import ApiService from "@/core/services/ApiService";
import TokenService from "@/core/services/TokenService";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

interface user {
  name: string;
}

interface data {
  friend: user;
}

@Module
export default class ChatModule extends VuexModule {
  friendList: user[] = [];
  message = [];
  receiver_id = 0;

  get listFriend() {
    return this.friendList;
  }

  get getMessage() {
    return this.message;
  }

  get getReceiver() {
    return this.receiver_id;
  }

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

  @Mutation
  [Mutations.SET_RECEIVER](data: any) {
    this.receiver_id = data;
  }

  @Mutation
  [Mutations.SET_MESSAGES](data: any) {
    this.message = data;

    console.log(this.message);
  }

  @Mutation
  [Mutations.SET_FRIEND_LIST](data: data[]) {
    data.forEach((d: data) => {
      this.friendList.push(d.friend);
    });

    console.log(this.friendList);
  }

  @Action
  [Actions.GET_FRIENDS]() {
    ApiService.setHeader();
    return ApiService.get("/getFriends")
      .then((data: any) => {
        this.context.commit(Mutations.SET_FRIEND_LIST, data.data.list);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  @Action
  [Actions.GET_MESSAGES](request: { sender_id: string; receiver_id: string }) {
    ApiService.setHeader();
    return ApiService.get(
      `message?receiver_id=${request.receiver_id}&sender_id=${request.sender_id}`
    ).then(({ data }) => {
      this.context.commit(Mutations.SET_MESSAGES, data.data);
      this.context.commit(Mutations.SET_RECEIVER, request.receiver_id);
    });
  }

  @Action
  [Actions.SEND_MESSAGE](request: any) {
    ApiService.setHeader();
    return ApiService.post("sendMessage", request).then((data) => {
      console.log("berhasil dibuat");
    });
  }
}
