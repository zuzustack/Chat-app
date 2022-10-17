<template>
  <div>
    <!-- Begin:wrapper -->
    <div class="container mt-3">
      <div class="card text-bg-dark">
        <div class="card-header d-flex">
          <h3>Chat-App</h3>
        </div>
        <div class="card-body">
          <div class="ms-auto">
            <router-view />
          </div>
        </div>
        <div class="card-footer text-muted">
          Created With Love <a href="https://github.com/zuzustack">ZuzuStack</a>
        </div>
      </div>
    </div>
    <!-- End:wrapper -->
  </div>
</template>
