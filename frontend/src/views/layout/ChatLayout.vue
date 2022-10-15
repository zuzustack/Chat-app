<template>
  <div class="row">
    <div class="col-3">
      <Sidebar />
    </div>
    <div class="col-9">
      <ChatMenu />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/views/crafted/component/SidebarFriend.vue";
import ChatMenu from "@/views/crafted/component/ChatMenu.vue";

export default defineComponent({
  components: {
    Sidebar,
    ChatMenu,
  },
  setup() {
    console.log("You Log-In");
  },
});
</script>
