<template>
  <div>
    <div class="card text-bg-light">
      <h5 class="card-header">Username</h5>
      <div class="card-body overflow-scroll h-chatbox">
        <!-- Self -->
        <div v-for="message in messages" class="card mb-2" :key="message.id">
          <!-- Sender -->
          <div v-if="message.sender_id == user_id" class="card-body text-end">
            <h5 class="card-title m-0">{{ message.username }}</h5>
            <div class="card-text text-muted">{{ message.text }}</div>
          </div>

          <!-- Receive -->
          <div v-else class="card-body">
            <h5 class="card-title m-0">{{ message.username }}</h5>
            <div class="card-text text-muted">{{ message.text }}</div>
          </div>
        </div>

        <!-- People -->
        <!-- <div class="card mb-2">

        </div> -->
      </div>
      <div class="input-group">
        <input
          v-model="FormData.text"
          type="text"
          class="form-control outline-none"
          placeholder="Message"
          aria-label="Message"
          aria-describedby="basic-addon2"
        />
        <button
          class="input-group-text btn btn-primary w-25"
          id="basic-addon2"
          @click="sendMessage"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enum/StoreEnum";

interface message {
  text: string;
}

export default defineComponent({
  data() {
    return {
      messages: [],
      user_id: localStorage.getItem("ID_USER"),
    };
  },

  setup() {
    const store = useStore();

    let FormData = reactive({
      text: "",
      receiver_id: "",
      sender_id: localStorage.getItem("ID_USER"),
    });

    const sendMessage = () => {
      // console.log(FormData);

      store.dispatch(Actions.SEND_MESSAGE, FormData);
    };

    return {
      FormData,
      sendMessage,
      store,
    };
  },

  watch: {
    "store.getters.getMessage"(messages) {
      this.messages = messages;
      console.log(this.messages);
    },

    "store.getters.getReceiver"(newReceiverID) {
      console.log("masukk ");
      this.FormData.receiver_id = newReceiverID;
    },
  },
});
</script>

<style scoped>
.h-chatbox {
  height: 25rem;
}
</style>
