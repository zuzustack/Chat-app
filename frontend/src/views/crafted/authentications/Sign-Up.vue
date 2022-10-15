<template>
  <div class="card mx-auto text-bg-light my-5" style="width: 23rem">
    <div class="card-body">
      <h5 class="card-title text-center">Login</h5>
      <form class="row g-3">
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
        <div class="">
          <label for="inputPassword4" class="form-label text-center">
            Confirm Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary ms-auto d-block">
            Sign Up
          </button>
        </div>
      </form>
      <router-link
        :to="{ name: 'log-in' }"
        class="text-decoration-none text-muted text-center"
      >
        Already have account?
      </router-link>
    </div>
  </div>
</template>
