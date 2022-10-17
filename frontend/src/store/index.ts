import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "./modules/AuthModule";
import ChatModule from "./modules/ChatModule";

config.rawError = true;

const store = createStore({
  modules: {
    AuthModule,
    ChatModule,
  },
});

export default store;
