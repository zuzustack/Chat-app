<template>
  <ul class="list-group">
    <li
      @click="getMessage(friend.id)"
      v-for="friend in friendList"
      class="list-group-item mb-3 list-group-item-dark mouse-pointer"
      :key="friend.id"
    >
      <div class="d-flex">
        <img
          src="https://source.unsplash.com/400x400?random"
          class="col-4 rounded-circle w-25 me-3"
          alt=""
        />
        <div class="col-7">
          <h6>{{ friend.username }}</h6>
          <p class="text-muted m-0">bla...</p>
        </div>
        <div class="col-1 d-flex align-items-center">
          <span class="badge text-bg-success">4</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enum/StoreEnum";

export default defineComponent({
  data() {
    return {
      friendList: [],
    };
  },

  setup() {
    const store = useStore();

    const getMessage = async (id: string) => {
      await store.dispatch(Actions.GET_MESSAGES, {
        sender_id: localStorage.getItem("ID_USER"),
        receiver_id: id,
      });
    };

    return { store, getMessage };
  },

  async mounted() {
    await this.store.dispatch(Actions.GET_FRIENDS);
    this.friendList = this.store.getters.listFriend;
    console.log(this.friendList);
  },
});
</script>

<style scoped>
.mouse-pointer {
  cursor: pointer;
}
</style>
