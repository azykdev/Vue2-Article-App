import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  LoginView,
  RegisterView,
  ArticleView,
  CreateArticleView,
  EditArticleView,
} from "@/views";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/article/:slug",
    name: "article",
    component: ArticleView,
  },
  {
    path: "/create-article",
    name: "create-article",
    component: CreateArticleView,
  },
  {
    path: "/edit-article/:slug",
    name: "edit-article",
    component: EditArticleView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
