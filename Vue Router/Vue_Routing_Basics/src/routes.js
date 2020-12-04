//Holds all routes
// import User from './components/user/User.vue'; --> swhiched out with lazy loading below.
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";
import AboutmeDetail from "./components/aboutme/AboutmeDetail.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

//This is how we create lazy loading.
const User = (resolve) => {
  require.ensure(
    ["./components/user/User.vue"],
    () => {
      resolve(require("./components/user/User.vue"));
    },
    "user"
  ); // 'user' tag is what bundles this lazy rout with others.
};

const Aboutme = (resolve) => {
  require.ensure(
    ["./components/aboutme/Aboutme.vue"],
    () => {
      resolve(require("./components/aboutme/Aboutme.vue"));
    },
    "About me"
  ); // 'user' tag is what bundles this lazy rout with others.
};

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header,
    },
  },
  // Below we find a rout with child routes.
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header,
    },
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("Im inside route setup");
          next();
        },
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" },
    ],
  },
  {
    path: "/aboutme",
    components: {
      default: Aboutme,
      "header-bottom": Header,
    },
    children: [{ path: "", component: AboutmeDetail }],
  },
  { path: "/redirect-me", redirect: { name: "home" } },
  //Redirection path can be found below.
  { path: "*", redirect: "/" },
];
