<template>
  <div class="card mx-auto text-bg-light my-5" style="width: 23rem">
    <div class="card-body">
      <h5 class="card-title text-center">Login</h5>
      <div class="row g-3">
        <div class="">
          <label for="inputEmail4" class="text-center form-label">
            Username
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="">
          <label for="inputPassword4" class="form-label text-center">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <button
            @click="onSubmitLogin"
            class="btn btn-primary ms-auto d-block"
          >
            Login
          </button>
        </div>
      </div>
      <router-link
        :to="{ name: 'sign-up' }"
        class="text-decoration-none text-muted text-center"
      >
        Create Account?
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const onSubmitLogin = () => {
      router.push({ name: "beranda" });
    };

    console.log("MASUKK");

    return { onSubmitLogin };
  },
});
</script>
