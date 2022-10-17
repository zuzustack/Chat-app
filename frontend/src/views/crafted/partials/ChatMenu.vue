<template>
  <div>
    <div class="card text-bg-light">
      <h5 class="card-header">Username</h5>
      <div class="card-body overflow-scroll h-chatbox">
        <!-- Self -->
        <div class="card mb-2">
          <div class="card-body text-end">
            <div>
              <h5 class="card-title m-0">Username</h5>
              <div class="card-text text-muted">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
        </div>

        <!-- People -->
        <div class="card mb-2">
          <div class="card-body">
            <h5 class="card-title m-0">Username</h5>
            <div class="card-text text-muted">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control outline-none"
          placeholder="Message"
          aria-label="Message"
          aria-describedby="basic-addon2"
        />
        <button class="input-group-text btn btn-primary w-25" id="basic-addon2">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import ApiService from "@/core/services/ApiService";

export default defineComponent({});
</script>

<style scoped>
.h-chatbox {
  height: 25rem;
}
</style>
