import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/crafted/partials/MainBody.vue"),
    children: [
      {
        path: "/log-in",
        name: "log-in",
        component: () => import("@/views/crafted/authentications/Log-in.vue"),
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () => import("@/views/crafted/authentications/Sign-Up.vue"),
      },
      {
        path: "/beranda",
        name: "beranda",
        component: () => import("@/views/layout/ChatLayout.vue"),
        beforeEnter: async (to, from, next) => {
          if (
            store.getters.statusLogin &&
            (await store.dispatch("getPermission"))
          ) {
            next();
          } else {
            next({ name: "log-in" });
          }
        },
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: () => import("@/views/layout/ErrorLayout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (router.currentRoute.value.fullPath === "/") {
//     next({ name: "log-in" });
//   } else {
//     next();
//   }
// });

export default router;
