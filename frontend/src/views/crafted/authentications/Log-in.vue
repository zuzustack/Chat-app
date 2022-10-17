<template>
  <div class="card mx-auto text-bg-light my-5" style="width: 23rem">
    <div class="card-body">
      <h5 class="card-title text-center">Login</h5>
      <div class="row g-3">
        <div class="">
          <div v-if="error.isError" class="alert alert-danger" role="alert">
            {{ error.message }}
          </div>

          <label for="inputEmail4" class="text-center form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            v-model="form.username"
            id="inputEmail4"
          />
        </div>
        <div class="">
          <label for="inputPassword4" class="form-label text-center">
            Password
          </label>
          <input
            type="password"
            v-model="form.password"
            class="form-control"
            id="inputPassword4"
          />
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
import { defineComponent, reactive } from "vue";
import TokenService from "@/core/services/TokenService";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Actions } from "@/store/enum/StoreEnum";
import Swal from "sweetalert2";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    let form = reactive({
      username: "",
      password: "",
    });

    let error = reactive({
      message: "",
      isError: false,
    });

    const onSubmitLogin = async () => {
      Swal.showLoading();

      await store.dispatch(Actions.LOGIN_USER, form);

      console.log(store.getters.errorAuth);

      if (store.getters.errorAuth) {
        error.message = store.getters.errorAuth;
        error.isError = true;
        Swal.close();
      } else {
        router.push({ name: "beranda" });
        Swal.close();
      }
    };

    console.log("MASUKK");
    console.log(TokenService.getToken());

    return { onSubmitLogin, form, error };
  },
});
</script>
